const ForwarderHandshakeState = require('./ForwarderHandshakeState');

class SwitchableHandshakeState extends ForwarderHandshakeState {
  switch(
    handshake_pattern,
    initiator,
    prologue,
    s = null,
    e = null,
    rs = null,
    re = null,
    psks = null
  ) {
    if (initiator) {
      handshake_pattern.initiator_pre_message_pattern.forEach(pattern => {
        pattern = Array.isArray(pattern) ? pattern : [pattern];
        pattern.forEach(token => {
          if (token === 'e') {
            e = this.e;
          }
          if (token === 's') {
            s = this.s;
          }
        });
      });
      handshake_pattern.responder_pre_message_pattern.forEach(pattern => {
        pattern = Array.isArray(pattern) ? pattern : [pattern];
        pattern.forEach(token => {
          if (token === 'e') {
            re = this.re;
          }
          if (token === 's') {
            rs = this.rs;
          }
        });
      });
    } else {
      handshake_pattern.initiator_pre_message_pattern.forEach(pattern => {
        pattern = Array.isArray(pattern) ? pattern : [pattern];
        pattern.forEach(token => {
          if (token === 'e') {
            re = this.re;
          }
          if (token === 's') {
            rs = this.rs;
          }
        });
      });
      handshake_pattern.responder_pre_message_pattern.forEach(pattern => {
        pattern = Array.isArray(pattern) ? pattern : [pattern];
        pattern.forEach(token => {
          if (token === 'e') {
            e = this.e;
          }
          if (token === 's') {
            s = this.s;
          }
        });
      });
    }
    return this.initialize(handshake_pattern, initiator, prologue, s, e, rs, re, psks);
  }
}
module.exports = SwitchableHandshakeState;
