const X25519DH = require('./dissononce/X25519DH');
const SHA256Hash = require('./dissononce/SHA256Hash');
const HandshakeState = require('./dissononce/HandshakeState');
const SwitchableHandshakeState = require('./dissononce/SwitchableHandshakeState');
const WASymmetricState = require('./dissononce/WASymmetricState');
const CipherState = require('./dissononce/CipherState');
const AESGCMCipher = require('./dissononce/AESGCMCipher');
const XXHandshakePattern = require('./dissononce/handshakepatterns/XXHandshakePattern');
const IKHandshakePattern = require('./dissononce/handshakepatterns/IKHandshakePattern');
const FallbackPatternModifier = require('./dissononce/FallbackPatternModifier');

const ClientHelloProto = require('./proto/ClientHello.proto');
const HandShakeMessageProto = require('./proto/HandShakeMessage.proto');

const libsignal = require('libsignal-protocol-typescript');

const { HandshakeMessage } = HandShakeMessageProto.HandshakeMessage;

class HandShake {
  constructor({ header, config, serverStaticPublic, clientStaticKeyPair, logger, socket }) {
    //
    this.header = header;
    this.config = config;
    this.serverStaticPublic = serverStaticPublic;
    this.clientStaticKeyPair = clientStaticKeyPair;
    this.logger = logger || console;

    this.edgeHeader = Buffer.concat([Buffer.from('ED'), Buffer.from([0, 1])]);

    // 服务端公钥
    this.handshakestate = null;
    // 加密部分
    this.sendCipherState = null;
    this.recvCipherState = null;
    this.socket = socket;

    // 处理公私钥
    if (this.serverStaticPublic?.length > 10) {
      this.serverStaticPublic = Buffer.from(this.serverStaticPublic, 'base64');
    }
    this.clientStaticKeyPair = Buffer.from(this.clientStaticKeyPair, 'base64');
    this.clientStaticKeyPair = {
      private: this.clientStaticKeyPair.subarray(0, 32),
      public: this.clientStaticKeyPair.subarray(-32),
    };
  }

  get rs() {
    return this.handshakestate.rs || null;
  }

  toBuffer(plaintext) {
    return typeof plaintext === 'string'
      ? Buffer.from(plaintext, 'base64')
      : Buffer.from(plaintext || '');
  }

  decrypt(message) {
    return this.recvCipherState.decrypt_with_ad(Buffer.alloc(0), this.toBuffer(message));
  }

  encrypt(message) {
    return this.sendCipherState.encrypt_with_ad(Buffer.alloc(0), this.toBuffer(message));
  }

  send(message, withHeader = true) {
    if (withHeader) {
      let hex = ('000000' + Number(message.length).toString(16)).slice(-6);
      let header = Buffer.from(hex, 'hex');
      this.socket.write(header);
      this.socket.write(message);
    } else {
      this.socket.write(message);
    }
  }

  async read() {
    let len = 0;
    await this.socket.readAsync((buffer) => {
      if (buffer.length < 3) return false;
      len = Number(`0x${buffer.slice(0, 3).toString('hex')}`);
      return buffer.length >= len + 3;
    });
    return this.socket.spliceChunks(0, len + 3).slice(3);
  }

  async sendWithEncrypt(message) {
    this.send(this.encrypt(message));
  }

  async readWithDecrypt() {
    const chunks = await this.read();
    return this.decrypt(chunks);
  }

  async perform() {
    this.logger.debug('start handshake.');

    libsignal.curve = (await libsignal.default()).Curve;

    this.clientConfigBuffer = this.createPayload();

    const dh = new X25519DH();
    const cipher = new AESGCMCipher();

    this.handshakestate = new SwitchableHandshakeState(
      new HandshakeState(new WASymmetricState(new CipherState(cipher), new SHA256Hash()), dh)
    );
    let cipherstatepair;
    // 服务端公钥
    if (this.serverStaticPublic?.length > 10) {
      try {
        this.logger.debug('perform use startHandshakeIK');
        cipherstatepair = await this.startHandshakeIK();
      } catch (e) {
        this.logger.error('error', e);
        this.logger.debug('perform use switchHandshakeXXFallback');
        cipherstatepair = await this.switchHandshakeXXFallback();
      }
    } else {
      this.logger.debug('perform use startHandShakeXX');
      cipherstatepair = await this.startHandShakeXX();
    }
    this.logger.debug('start handshake success.');
    return cipherstatepair;
  }

  async startHandShakeXX() {
    const xx = new XXHandshakePattern();
    this.handshakestate.initialize(xx, true, this.header, this.clientStaticKeyPair);

    this.send(this.header, false);
    this.handshakestate.write_message(Buffer.alloc(0), []);

    const publicKey = this.handshakestate.e.public;
    this.logger.debug('send local public key', publicKey.toString('base64'));

    const clientHelloBuffer = HandshakeMessage.encode(
      HandshakeMessage.create({ clientHello: { ephemeral: publicKey } })
    ).finish();
    this.send(clientHelloBuffer);

    const buffer = await this.read();

    const { serverHello } = HandshakeMessage.decode(buffer).toJSON();
    this.logger.debug('serverHello', serverHello);
    const message = Buffer.concat([
      Buffer.from(serverHello.ephemeral, 'base64'),
      Buffer.from(serverHello.static, 'base64'),
      Buffer.from(serverHello.payload, 'base64'),
    ]);
    // second
    this.handshakestate.read_message(message, []);

    const messageArray = [];
    const cipherpair = this.handshakestate.write_message(this.clientConfigBuffer, messageArray);
    const messageBuffer = Buffer.from(messageArray);
    const clientFinishBuffer = HandshakeMessage.encode(
      HandshakeMessage.create({
        clientFinish: {
          static: messageBuffer.slice(0, 48),
          payload: messageBuffer.slice(48),
        },
      })
    ).finish();

    this.send(clientFinishBuffer);
    this.logger.debug('send client finish buffer.');
    [this.sendCipherState, this.recvCipherState] = cipherpair;
    // 握手结束
    return cipherpair;
  }

  async startHandshakeIK() {
    const ik = new IKHandshakePattern();
    this.handshakestate.initialize(
      ik,
      true,
      this.header,
      this.clientStaticKeyPair,
      null,
      this.serverStaticPublic
    );
    this.send(this.edgeHeader, false);
    // route
    const routing = this.config.edge_routing_info || 'CAwIBQ==';
    this.logger.debug('routing', routing);
    this.send(Buffer.from(routing, 'base64'), true);
    this.send(this.header, false);

    const messageArray = [];
    this.handshakestate.write_message(this.clientConfigBuffer, messageArray);
    const messageBuffer = Buffer.from(messageArray);

    const ephemeral = messageBuffer.slice(0, 32);
    const static_public = messageBuffer.slice(32, 32 + 48);
    const payload = messageBuffer.slice(32 + 48);

    const clientHelloBuffer = HandshakeMessage.encode(
      HandshakeMessage.create({
        clientHello: { ephemeral, static: static_public, payload },
      })
    ).finish();

    this.send(clientHelloBuffer);
    const chunks = await this.read();
    const { serverHello } = HandshakeMessage.decode(chunks).toJSON();

    if (serverHello.static && serverHello.static.length) {
      this.serverHello = serverHello;
      throw new Error('fallback xx');
    }

    const message = Buffer.concat([
      Buffer.from(serverHello.ephemeral, 'base64'),
      Buffer.alloc(0),
      Buffer.from(serverHello.payload, 'base64'),
    ]);
    const cipherpair = this.handshakestate.read_message(message, []);
    [this.sendCipherState, this.recvCipherState] = cipherpair;
    // 握手结束
    return cipherpair;
  }

  async switchHandshakeXXFallback() {
    this.handshakestate.switch(
      new FallbackPatternModifier().modify(new XXHandshakePattern()),
      true,
      this.HEADER,
      this.clientStaticKeyPair
    );
    const payload_buffer = [];
    const message = Buffer.concat([
      Buffer.from(this.serverHello.ephemeral, 'base64'),
      Buffer.from(this.serverHello.static, 'base64'),
      Buffer.from(this.serverHello.payload, 'base64'),
    ]);

    this.handshakestate.read_message(message, payload_buffer);

    const message_array = [];
    const cipherpair = this.handshakestate.write_message(this.clientConfigBuffer, message_array);
    const message_buffer = Buffer.from(message_array);

    const clientFinishBuffer = HandshakeMessage.encode(
      HandshakeMessage.create({
        clientFinish: { static: message_buffer.slice(0, 48), payload: message_buffer.slice(48) },
      })
    ).finish();

    this.send(clientFinishBuffer);
    [this.sendCipherState, this.recvCipherState] = cipherpair;
    // 握手结束
    return cipherpair;
  }

  createPayload() {
    this.logger.debug('handshake payload', JSON.stringify(this.config));
    const ClientConfig = ClientHelloProto.ClientHello.C2S;
    const buffer = ClientConfig.encode(ClientConfig.create(this.config)).finish();
    return buffer;
  }
}

module.exports = HandShake;
