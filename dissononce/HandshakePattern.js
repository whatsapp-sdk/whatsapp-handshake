class HandshakePattern {
  REGEX_PATTERN_NAME_MODIFIERS = new RegExp('([A-Z1-9]{1,4})([a-z0-9+]+)*');

  TEMPLATE_REPR = '{name}:\n{patterns}';

  TEMPLATE_REPR_PATTERNS_WITH_PRE = '{pre_patterns}\n  ...\n{message_patterns}';

  TEMPLATE_REPR_MESSAGE_SEND = '  -> {tokens}';

  TEMPLATE_REPR_MESSAGE_RECV = '  <- {tokens}';

  constructor(
    name,
    message_patterns,
    initiator_pre_messages = null,
    responder_pre_message_pattern = null,
    interpret_as_bob = false
  ) {
    this._name = name; // type: str
    // this._origin_pattern, this._modifiers = this.__class__.parse_handshakepattern(this._name)
    this._origin_pattern = name;
    this._modifiers = [];
    this._message_patterns = message_patterns; // type: tuple[tuple[str]]
    this._initiator_pre_message_pattern = initiator_pre_messages || []; // type: tuple[str]
    this._responder_pre_message_pattern = responder_pre_message_pattern || []; // type: tuple[str]
    this._interpret_as_bob = interpret_as_bob; // type: bool
  }

  get name() {
    return this._name;
  }

  get interpret_as_bob() {
    return this._interpret_as_bob;
  }

  get message_patterns() {
    return this._message_patterns;
  }

  get initiator_pre_message_pattern() {
    return this._initiator_pre_message_pattern;
  }

  get responder_pre_message_pattern() {
    return this._responder_pre_message_pattern;
  }

  get origin_name() {
    return this._origin_pattern;
  }

  get modifiers() {
    return this._modifiers;
  }

  // static parse_handshakepattern(handshake_pattern_name) {
  //   let matches = handshake_pattern_name.search(this.REGEX_PATTERN_NAME_MODIFIERS)
  // }
}

module.exports = HandshakePattern;
