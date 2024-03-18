const HandShakeState = require('./HandshakeState');

class ForwarderHandshakeState extends HandShakeState {
  constructor(handshakestate) {
    super();
    this._handshakestate = handshakestate;
  }

  initialize(
    handshake_pattern,
    initiator,
    prologue,
    s = null,
    e = null,
    rs = null,
    re = null,
    psks = null
  ) {
    return this._handshakestate.initialize(
      handshake_pattern,
      initiator,
      prologue,
      s,
      e,
      rs,
      re,
      psks
    );
  }

  write_message(payload, message_buffer) {
    return this._handshakestate.write_message(payload, message_buffer);
  }

  read_message(message, payload_buffer) {
    return this._handshakestate.read_message(message, payload_buffer);
  }

  get re() {
    return this._handshakestate.re;
  }

  get rs() {
    return this._handshakestate.rs;
  }

  get s() {
    return this._handshakestate.s;
  }

  get e() {
    return this._handshakestate.e;
  }
}

module.exports = ForwarderHandshakeState;
