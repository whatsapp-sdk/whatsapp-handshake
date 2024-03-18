const HandshakePattern = require('../HandshakePattern');

class IKHandshakePattern extends HandshakePattern {
  constructor() {
    super(
      'IK',
      [
        ['e', 'es', 's', 'ss'],
        ['e', 'ee', 'se'],
      ],
      null,
      ['s']
    );
  }
}

module.exports = IKHandshakePattern;
