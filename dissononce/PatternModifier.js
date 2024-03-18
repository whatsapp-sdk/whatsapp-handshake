const HandshakePattern = require('./HandshakePattern');

class PatternModifier {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  _is_modifiable() {}

  _get_message_patterns() {}

  _get_initiator_pre_messages() {}

  _get_responder_pre_messages() {}

  _interpret_as_bob(handshakepattern) {
    return false;
  }

  modify(pattern) {
    if (!this._is_modifiable(pattern)) {
      throw new Error(`pattern ${pattern.name} is not modifiable by ${this.name}`);
    }
    const name = pattern.origin_name + pattern.modifiers.concat(this.name).join('+');
    return new HandshakePattern(
      name,
      this._get_message_patterns(pattern),
      this._get_initiator_pre_messages(pattern),
      this._get_responder_pre_messages(pattern),
      this._interpret_as_bob(pattern)
    );
  }
}
module.exports = PatternModifier;
