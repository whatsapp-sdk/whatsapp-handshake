const PatternModifier = require('./PatternModifier');

class FallbackPatternModifier extends PatternModifier {
  VALID_FIRST_MESSAGES = [['e'], ['s'], ['e', 's']];

  constructor() {
    super('fallback');
  }

  _is_modifiable(handsakepattern) {
    const str = handsakepattern.message_patterns[0].join('');
    for (let i = 0; i < this.VALID_FIRST_MESSAGES.length; i++) {
      const element = this.VALID_FIRST_MESSAGES[i].join('');
      if (element === str) return true;
    }
    return false;
  }

  _get_message_patterns(handshakepattern) {
    return handshakepattern.message_patterns.slice(1);
  }

  _get_initiator_pre_messages(handshakepattern) {
    return handshakepattern.message_patterns[0];
  }

  _interpret_as_bob(handshakepattern) {
    return true;
  }
}
module.exports = FallbackPatternModifier;
