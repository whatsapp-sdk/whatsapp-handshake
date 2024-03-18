const ForwarderHandshakeState = require('./ForwarderHandshakeState');
const Machine = require('./Machine');

class GuardedHandshakeState extends ForwarderHandshakeState {
  _STATES = ['init', 'handshake', 'finish'];

  _TRANSITIONS = [
    ['start', 'init', 'handshake'],
    ['next_message', 'handshake', '='],
    ['start', 'handshake', '='],
    ['finish', 'handshake', 'finish'],
    ['start', 'finish', 'handshake'],
  ];

  _TEMPLATE_PATTERN_STATE_READ = 'read_{pattern}';

  _TEMPLATE_PATTERN_STATE_WRITE = 'write_{pattern}';

  ERROR_TEMPL = 'Cannot {bad_method} while in {current} phase.';

  constructor(handshakestate) {
    super(handshakestate);
    this._handshake_machine = new Machine('this', this._STATES, 'init', this._TRANSITIONS);
    this._pattern_machine = null;
  }

  _derive_pattern_machine(handshake_pattern, initiator) {
    const states = ['finish'];
    const transitions = [];
    let prev_state = null;
    for (let i = 0; i < handshake_pattern.message_patterns.length; i++) {
      let read_phase = i % 2 === 0;
      if (handshake_pattern.interpret_as_bob) {
        read_phase = !read_phase;
      }
      if (!initiator) {
        read_phase = !read_phase;
      }
      const message_pattern = handshake_pattern.message_patterns[i];
      const pattern_str = message_pattern.join('_');
      const template = read_phase
        ? this._TEMPLATE_PATTERN_STATE_WRITE
        : this._TEMPLATE_PATTERN_STATE_READ;
      const state = template.replace('{pattern}', pattern_str);
      if (prev_state !== null) {
        const action = read_phase ? 'read' : 'write';
        transitions.push([action, prev_state, state]);
      }
      if (i === handshake_pattern.message_patterns.length - 1) {
        transitions.append([read_phase ? 'write' : 'read', state, 'finish']);
      }
      states.push(state);
      prev_state = state;
    }
    return new Machine('this', states, states[1], transitions);
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
    try {
      this._handshake_machine.start();
    } catch (err) {
      this._convert_machine_error(err, 'initialize');
    }
    this._pattern_machine = this._derive_pattern_machine(handshake_pattern, initiator);
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
    try {
      this._handshake_machine.next_message();
      this._pattern_machine.write();
    } catch (e) {
      this._convert_machine_error(e, 'write_message');
    }
    const result = this._handshakestate.write_message(payload, message_buffer);
    if (result !== null) {
      this._handshake_machine.finish();
    }
    return result;
  }

  read_message(message, payload_buffer) {
    try {
      this._handshake_machine.next_message();
      this._pattern_machine.read();
    } catch (e) {
      this._convert_machine_error(e, 'read_message');
    }
    const result = this._handshakestate.read_message(message, payload_buffer);
    if (result !== null) {
      this._handshake_machine.finish();
    }
    return result;
  }

  _convert_machine_error(machine_error, bad_method) {
    let current = null;
    if (this._handshake_machine.state === 'init') {
      current = 'initialize';
    } else if (this._handshake_machine.state === 'handshake') {
      current = bad_method === 'read_message' ? 'write_message' : 'write_message';
    } else {
      current = this._handshake_machine.state;
    }
    // "Cannot {bad_method} while in {current} phase."
    const error_message = this.ERROR_TEMPL.replace('{bad_method}', bad_method).replace(
      '{current}',
      current
    );
    throw new Error(`${machine_error.message} : ${error_message}`);
  }
}

module.exports = GuardedHandshakeState;
