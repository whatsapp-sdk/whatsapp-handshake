/* eslint-disable */
function toArray(obj) {
  if (obj === null) return [];
  if (Array.isArray(obj)) return obj;
  return [obj];
}

class State {
  static dynamic_methods = ['on_enter', 'on_exit'];
  constructor(name, on_enter = null, on_exit = null, ignore_invalid_triggers = null) {
    this._name = name;
    this.ignore_invalid_triggers = ignore_invalid_triggers;
    this.on_enter = on_enter ? toArray(on_enter) : [];
    this.on_exit = on_exit ? toArray(on_exit) : [];
  }
  get name() {
    if (this._name && this._name.name) return this._name.name;
    return this._name;
  }
  get value() {
    return this._name;
  }
  enter(event_data) {
    event_data.machine.callbacks(this.on_enter, event_data);
  }
  exit(event_data) {
    event_data.machine.callbacks(this.on_exit, event_data);
  }
  add_callback(trigger, func) {
    callback_list = this['on_' + trigger];
    callback_list.push(func);
  }
}

class Condition {
  constructor(func, target = true) {
    this.func = func;
    this.target = target;
  }
  check(event_data) {
    let predicate = event_data.machine.resolve_callable(this.func, event_data);
    if (event_data.machine.send_event) {
      return predicate(event_data) === this.target;
    }
    return predicate(...event_data.args) === this.target;
  }
}

class Transition {
  dynamic_methods = ['before', 'after', 'prepare'];
  condition_cls = Condition;
  constructor(
    source,
    dest,
    conditions = null,
    unless = null,
    before = null,
    after = null,
    prepare = null
  ) {
    this.source = source;
    this.dest = dest;
    this.prepare = prepare === null ? [] : toArray(prepare);
    this.before = before === null ? [] : toArray(before);
    this.after = after === null ? [] : toArray(after);
    this.conditions = [];
    if (conditions !== null) {
      toArray(conditions).forEach(cond => {
        this.conditions.push(new Condition(cond));
      });
    }
    if (unless !== null) {
      toArray(unless).forEach(cond => {
        this.conditions.push(new Condition(cond, false));
      });
    }
  }
  _eval_conditions(event_data) {
    for (let i = 0; i < this.conditions.length; i++) {
      const cond = this.conditions[i];
      if (!cond.check(event_data)) {
        return false;
      }
    }
    return true;
  }
  execute(event_data) {
    event_data.machine.callbacks(this.prepare, event_data);
    if (!this._eval_conditions(event_data)) {
      return false;
    }
    event_data.machine.callbacks(
      itertools.chain(event_data.machine.before_state_change, this.before),
      event_data
    );
    if (this.dest) {
      this._change_state(event_data);
    }
    event_data.machine.callbacks(
      itertools.chain(this.after, event_data.machine.after_state_change),
      event_data
    );
    return true;
  }
  _change_state(event_data) {
    event_data.machine.get_state(dthis.source).exit(event_data);
    event_data.machine.set_state(dthis.dest, event_data.model);
    event_data.update(getattr(event_data.model, event_data.machine.model_attribute));
    event_data.machine.get_state(dthis.dest).enter(event_data);
  }
  add_callback(trigger, func) {
    callback_list = this['trigger'];
    callback_list.push(func);
  }
}

class EventData {
  constructor(state, event, machine, model, args, kwargs) {
    this.state = state;
    this.event = event;
    this.machine = machine;
    this.model = model;
    this.args = args;
    this.kwargs = kwargs;
    this.transition = null;
    this.error = null;
    this.result = False;
  }
  update(state) {
    if (!state instanceof State) {
      this.state = this.machine.get_state(state);
    }
  }
}

class Event {
  constructor(name, machine) {
    this.name = name;
    this.machine = machine;
    this.transitions = {};
  }
  add_transition(transition) {
    this.transitions[transition.source] = this.transitions[transition.source] || [];
    this.transitions[transition.source].push(transition);
  }
  trigger(model, ...args) {
    let func = partial(this._trigger, model, ...args);
    return this.machine._process(func);
  }
  _trigger(model, ...args) {
    let state = this.machine.get_model_state(model);
    if (!this.transitions[state.name]) {
      ignore =
        state.ignore_invalid_triggers !== null
          ? state.ignore_invalid_triggers
          : this.machine.ignore_invalid_triggers;
    }
    event_data = new EventData(state, this, this.machine, model, ...args);
    return this._process(event_data);
  }
  _process(event_data) {
    this.machine.callbacks(this.machine.prepare_event, event_data);
    try {
      for (let i = 0; i < dthis.transitions[event_data.state.name].length; i++) {
        const trans = dthis.transitions[event_data.state.name][i];
        event_data.transition = trans;
        if (trans.execute(event_data)) {
          event_data.result = true;
          break;
        }
      }
    } catch (e) {
      console.error(e);
      event_data.error = err;
    } finally {
      this.machine.callbacks(this.machine.finalize_event, event_data);
    }
    return event_data.result;
  }
}

class Machine {
  separator = '_'; // separates callback type from state/transition name
  wildcard_all = '*'; // will be expanded to ALL states
  wildcard_same = '='; // will be expanded to source state
  state_cls = State;
  transition_cls = Transition;
  event_cls = Event;
  constructor(
    model = 'this',
    states = null,
    initial = 'initial',
    transitions = null,
    send_event = false,
    auto_transitions = true,
    ordered_transitions = false,
    ignore_invalid_triggers = null,
    before_state_change = null,
    after_state_change = null,
    name = null,
    queued = false,
    prepare_event = null,
    finalize_event = null,
    model_attribute = 'state',
    ...args
  ) {
    this._queued = queued;
    this._transition_queue = [];
    this._before_state_change = [];
    this._after_state_change = [];
    this._prepare_event = [];
    this._finalize_event = [];
    this._initial = null;

    this.states = {};
    this.events = {};
    this.send_event = send_event;
    this.auto_transitions = auto_transitions;
    this.ignore_invalid_triggers = ignore_invalid_triggers;
    this.prepare_event = prepare_event;
    this.before_state_change = before_state_change;
    this.after_state_change = after_state_change;
    this.finalize_event = finalize_event;
    this.name = name === null ? name + ': ' : '';
    this.model_attribute = model_attribute;

    this.models = [];
    if (state !== null) {
      this.add_states(states);
    }
    if (initial !== null) {
      this.initial = initial;
    }
    if (transitions !== null) {
      this.add_transitions(transitions);
    }
    if (ordered_transitions) {
      this.add_ordered_transitions();
    }
    if (model) {
      this.add_model(model);
    }
  }
  add_model(model, initial = null) {
    let models = toArray(model);
    if (initial === null) {
      if (this.initial === null) {
        throw new Error('No initial state configured for machine, must specify when adding model.');
      } else {
        initial = this.initial;
      }
    }
    for (let i = 0; i < models.length; i++) {
      let mod = models[i];
      mod = mod == 'this' ? this : mod;
      if (!this.models.includes(mod)) {
        this._checked_assignment(mod, 'trigger', partial(this._get_trigger, mod));
        for (let j = 0; j < this.events.length; j++) {
          const trigger = this.events[j];
          this._add_trigger_to_model(trigger, mod);
        }
        let stateKeys = Object.keys(this.states);
        for (let m = 0; m < stateKeys; m++) {
          let key = stateKeys[m];
          let state = this.states[key];
          this._add_model_to_state(state, mod);
        }
        this.set_state(initial, mod);
        this.models.push(mod);
      }
    }
  }
  remove_model(model) {
    let models = toArray(model);
    for (let i = 0; i < models.length; i++) {
      const mod = models[i];
      this.models.splice(this.models.indexOf(mod), 1);
    }
  }
  _create_transition(...args) {
    return new Transition(...args);
  }
  _create_event(...args) {
    return new Event(...args);
  }
  _create_state(...args) {
    return new State(...args);
  }
  get initial() {
    return this._initial;
  }
  set initial(value) {
    if (value instanceof State) {
      if (!this.states[value.name]) {
        this.add_state(value);
      } else {
        _ = this._has_state(value, true);
      }
      this._initial = value.name;
    } else {
      let state_name = typeof value === 'object' ? value.name : value;
      if (!this.states[state_name]) {
        this.add_state(state_name);
      }
      this._initial = state_name;
    }
  }
  get has_queue() {
    return this._queued;
  }
  get model() {
    if (this.models.length === 1) return this.models[0];
    return this.models;
  }
  get before_state_change() {
    return this._before_state_change;
  }
  set before_state_change(value) {
    this._before_state_change = toArray(value);
  }
  get after_state_change() {
    return this._after_state_change;
  }
  set after_state_change(value) {
    this._after_state_change = toArray(value);
  }
  get prepare_event() {
    return this._prepare_event;
  }
  get finalize_event() {
    return this._finalize_event;
  }
  set finalize_event(value) {
    this._finalize_event = toArray(value);
  }
  get_state(state) {
    if (typeof state === 'objet') {
      state = state.name;
    }
    if (!this.states[state]) throw new Error('State ' + state + ' is not a registered state.');
    return this.states[state];
  }
  is_state(state, model) {
    return getattr(model, this.model_attribute) == state;
  }
  get_model_state(model) {
    return this.get_state(getattr(model, this.model_attribute));
  }
  set_state(state, model = null) {
    if (!state instanceof State) {
      state = this.get_state(state);
    }
    let models = model === null ? this.models : toArray(model);
    for (let i = 0; i < models.length; i++) {
      const mod = models[i];
      setattr(mod, this.model_attribute, state.value);
    }
  }
  add_state(...args) {
    this.add_states(...args);
  }
  add_states(states, on_enter = null, on_exit = null, ignore_invalid_triggers = null) {
    ignore = ignore_invalid_triggers;
    if (ignore === null) {
      ignore = this.ignore_invalid_triggers;
    }
    states = toArray(states);
    for (let i = 0; i < states.length; i++) {
      const state = states[i];
      if (typeof state === 'string') {
        state = this._create_state(state, on_enter, on_exit, ignore);
      } else if (typeof state === 'object') {
        if (!state['ignore_invalid_triggers']) {
          state['ignore_invalid_triggers'] = ignore;
        }
        state = this._create_state(...state);
      }
      this.states[state.name] = state;
      for (let j = 0; j < this.models.length; j++) {
        const model = this.models[j];
        this._add_model_to_state(state, model);
      }
      if (this.auto_transitions) {
        let stateKeys = Object.keys(this.states);
        for (let m = 0; m < stateKeys.length; m++) {
          const a_state = stateKeys[m];
          if (a_state === state.name) {
            this.add_transition('to_' + a_state, this.wildcard_all, a_state);
          } else {
            this.add_transition('to_' + a_state, state.name, a_state);
          }
        }
      }
    }
  }
  _add_model_to_state(state, model) {
    for (let i = 0; i < this.state_cls.dynamic_methods.length; i++) {
      const callback = this.state_cls.dynamic_methods[i];
      let method = `${callback}_${state.name}`;
      if (
        hasattr(model, method) &&
        inspect.ismethod(getattr(model, method)) &&
        !getattr(state, callback)[method]
      ) {
        state.add_callback(callback.slice(3), method);
      }
    }
  }
  _checked_assignment(model, name, func) {
    if (hasattr(model, name)) {
      console.info(this.name + "Model already contains an attribute '" + name + "'. Skip binding.");
    } else {
      setattr(model, name, func);
    }
  }
  _add_trigger_to_model(trigger, model) {
    this._checked_assignment(model, trigger, partial(this.events[trigger].trigger, model));
  }
  _get_trigger(model, trigger_name, ...args) {
    let et = null;
    try {
      et = this.events[trigger_name];
    } catch (e) {
      state = this.get_model_state(model);
      ignore =
        state.ignore_invalid_triggers !== null
          ? state.ignore_invalid_triggers
          : this.ignore_invalid_triggers;
      if (!ignore) throw new Error("Do not know event named '" + trigger_name + "'.");
      return false;
    }
    return et.trigger(model, ...args);
  }
  get_triggers(...args) {
    states = set(args);
    // return [t for (t, ev) in this.events.items() if any(state in ev.transitions for state in states)]
  }
  add_transition(
    trigger,
    source,
    dest,
    conditions = null,
    unless = null,
    before = null,
    after = null,
    prepare = null
  ) {}
  add_transitions() {}
  add_ordered_transitions() {}
  get_transitions() {}
  remove_transition() {}
  dispatch() {}
  callbacks() {}
  callback() {}
  static resolve_callable() {}
  _has_state() {}
  _process() {}
  _identify_callback() {}
  __getattr__() {}
}
module.exports = Machine;
