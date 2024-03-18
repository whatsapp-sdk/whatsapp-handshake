const DH = require('./DH');

class X25519DH extends DH {
  constructor() {
    super('25519', 32);
  }
}

module.exports = X25519DH;
