const libsignal = require('libsignal-protocol-typescript');
const BaseHandshakeState = require('./BaseHandShakeState');

const generateKeyPair = () => {
  const keyPair = libsignal.curve.generateKeyPair();
  keyPair.pubKey = Buffer.from(keyPair.pubKey);
  keyPair.privKey = Buffer.from(keyPair.privKey);
  return {
    public: keyPair.pubKey.slice(keyPair.pubKey.length - 32),
    private: keyPair.privKey.slice(keyPair.privKey.length - 32),
  };
};
class HandshakeState extends BaseHandshakeState {
  _TEMPLATE_PROTOCOL_NAME = 'Noise_{handshake}_{dh}_{cipher}_{hash}';

  constructor(symmetricstate, dh) {
    super();
    this._symmetricstate = symmetricstate; // type: SymmetricState
    this._dh = dh; // type: DH
    this._s = null; // type: KeyPair config.client_static_keypair
    this._e = null; // type: KeyPair | None 本地生成的一对公私钥
    this._rs = null; // type: PublicKey | None 服务端公钥
    this._re = null; // type: PublicKey | None 本次会话，服务端返回的公钥
    this._initiator = null;
    this._message_patterns = null; // type: list[tuple[str]]
    this._protocol_name = null; // type: str | None
  }

  get protocol_name() {
    return this._protocol_name;
  }

  get symmetricstate() {
    return this._symmetricstate;
  }

  get rs() {
    return this._rs;
  }

  get re() {
    return this._re;
  }

  get s() {
    return this._s;
  }

  get e() {
    return this._e;
  }

  get dh() {
    return this._dh;
  }

  initialize(
    handshake_pattern,
    initiator, // xx 时 为 true
    prologue, // Buffer.from('WA',[4,1]) = Buffer.from([0x57,0x41,0x04,0x01])
    s = null,
    e = null,
    rs = null,
    re = null,
    psks = null
  ) {
    // Noise_XX_25519_AESGCM_SHA256
    this._protocol_name = this._derive_protocol_name(handshake_pattern.name);
    this._symmetricstate.initialize_symmetric(this._protocol_name);
    this._symmetricstate.mix_hash(prologue);
    this._initiator = initiator;
    this._s = s;
    this._e = e;
    this._rs = rs;
    this._re = re;
    this._psks = psks;
    this._pskmode = handshake_pattern.name.indexOf('psk') !== -1;
    if (
      handshake_pattern.initiator_pre_message_pattern.length ||
      handshake_pattern.responder_pre_message_pattern.length
    ) {
      if (initiator) {
        for (let i = 0; i < handshake_pattern.initiator_pre_message_pattern.length; i++) {
          const token = handshake_pattern.initiator_pre_message_pattern[i];
          if (token === 's') {
            this._symmetricstate.mix_hash(s.public);
          }
          if (token === 'e') {
            this._symmetricstate.mix_hash(e.public);
            if (this._pskmode) {
              this._symmetricstate.mix_key(e.public);
            }
          }
        }
        for (let i = 0; i < handshake_pattern.responder_pre_message_pattern.length; i++) {
          const token = handshake_pattern.responder_pre_message_pattern[i];
          if (token === 's') {
            this._symmetricstate.mix_hash(rs);
          }
          if (token === 'e') {
            this._symmetricstate.mix_hash(re);
          }
        }
      } else {
        for (let i = 0; i < handshake_pattern.initiator_pre_message_pattern.length; i++) {
          const token = handshake_pattern.initiator_pre_message_pattern[i];
          if (token === 's') {
            this._symmetricstate.mix_hash(rs);
          }
          if (token === 'e') {
            this._symmetricstate.mix_hash(re);
          }
        }
        for (let i = 0; i < handshake_pattern.responder_pre_message_pattern.length; i++) {
          const token = handshake_pattern.responder_pre_message_pattern[i];
          if (token === 's') {
            this._symmetricstate.mix_hash(s.public);
          }
          if (token === 'e') {
            this._symmetricstate.mix_hash(e.public);
            if (this._pskmode) {
              this._symmetricstate.mix_key(e.public);
            }
          }
        }
      }
    }
    this._message_patterns = handshake_pattern.message_patterns;
  }

  _derive_protocol_name(handshake_pattern_name) {
    return `Noise_${handshake_pattern_name}_${this._dh.name}_${this._symmetricstate.ciphername}_${this._symmetricstate.hashname}`;
  }

  write_message(payload, message_buffer) {
    const message_pattern = this._message_patterns.shift();
    for (let i = 0; i < message_pattern.length; i++) {
      const token = message_pattern[i];
      if (token === 'e') {
        this._e = generateKeyPair();
        this._e.public.map((val) => message_buffer.push(val));
        this._symmetricstate.mix_hash(this._e.public);
        if (this._pskmode) {
          this._symmetricstate.mix_key(this._e.public);
        }
      } else if (token === 's') {
        const encrypted = this._symmetricstate.encrypt_and_hash(this._s.public);
        encrypted.map((val) => message_buffer.push(val));
      } else if (token === 'ee') {
        this._symmetricstate.mix_key(this._dh.dh(this._e, this._re));
      } else if (token === 'es') {
        if (this._initiator) {
          this._symmetricstate.mix_key(this._dh.dh(this._e, this._rs));
        } else {
          this._symmetricstate.mix_key(this._dh.dh(this._s, this._re));
        }
      } else if (token === 'se') {
        if (this._initiator) {
          this._symmetricstate.mix_key(this._dh.dh(this._s, this._re));
        } else {
          this._symmetricstate.mix_key(this._dh.dh(this._e, this._rs));
        }
      } else if (token === 'ss') {
        this._symmetricstate.mix_key(this._dh.dh(this._s, this._rs));
      } else if (token === 'psk') {
        this._symmetricstate.mix_key_and_hash(this._psks.shift());
      } else {
        throw new Error(`Unsupported token ${token} found in message_pattern`);
      }
    }
    const res = this._symmetricstate.encrypt_and_hash(payload);
    if (res && res.length) {
      res.map((val) => message_buffer.push(val));
    }
    if (this._message_patterns.length === 0) {
      return this._symmetricstate.split();
    }
  }

  read_message(message, payload_buffer) {
    const message_pattern = this._message_patterns.shift();
    let temp;
    for (let i = 0; i < message_pattern.length; i++) {
      const token = message_pattern[i];
      if (token === 'e') {
        this._re = message.slice(0, this._dh.dhlen);
        message = message.slice(this._dh.dhlen);
        this._symmetricstate.mix_hash(this._re);
        if (this._pskmode) {
          this._symmetricstate.mix_key(this._re);
        }
      } else if (token === 's') {
        if (this._symmetricstate.cipherstate_has_key()) {
          temp = message.slice(0, this._dh.dhlen + 16);
        } else {
          temp = message.slice(0, this._dh.dhlen);
        }
        message = message.slice(temp.length);
        this._rs = this._symmetricstate.decrypt_and_hash(temp);
      } else if (token === 'ee') {
        this._symmetricstate.mix_key(this._dh.dh(this._e, this._re));
      } else if (token === 'es') {
        if (this._initiator) {
          this._symmetricstate.mix_key(this._dh.dh(this._e, this._rs));
        } else {
          this._symmetricstate.mix_key(this._dh.dh(this._s, this._re));
        }
      } else if (token === 'se') {
        if (this._initiator) {
          this._symmetricstate.mix_key(this._dh.dh(this._s, this._re));
        } else {
          this._symmetricstate.mix_key(this._dh.dh(this._e, this._rs));
        }
      } else if (token === 'ss') {
        this._symmetricstate.mix_key(this._dh.dh(this._s, this._rs));
      } else if (token === 'psk') {
        this._symmetricstate.mix_key_and_hash(this._psks.shift());
      } else {
        throw new Error(`Unsupported token ${token} found in message_pattern`);
      }
    }
    const res = this._symmetricstate.decrypt_and_hash(message);
    if (res && res.length) {
      res.map((val) => payload_buffer.push(val));
    }
    if (this._message_patterns.length === 0) {
      return this._symmetricstate.split();
    }
  }
}

module.exports = HandshakeState;
