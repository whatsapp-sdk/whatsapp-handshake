class BaseHandshakeState {
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
    //
  }

  rite_message(payload, message_buffer) {
    //
  }

  read_message(message, payload_buffer) {
    //
  }
}
module.exports = BaseHandshakeState;
