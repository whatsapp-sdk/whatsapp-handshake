const HandshakePattern = require('../HandshakePattern');

class XXHandshakePattern extends HandshakePattern {
  constructor() {
    super('XX', [['e'], ['e', 'ee', 's', 'es'], ['s', 'se']]);
  }
}

module.exports = XXHandshakePattern;
