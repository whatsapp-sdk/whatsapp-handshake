const crypto = require('crypto');
const Hash = require('./Hash');

class SHA256Hash extends Hash {
  constructor() {
    super('SHA256', 32, 64);
  }

  hash(message) {
    return crypto
      .createHash('sha256')
      .update(message)
      .digest();
  }

  hmac_hash(key, message) {
    const hmac = crypto.createHmac('sha256', this.toBuffer(key));
    hmac.update(this.toBuffer(message));
    return hmac.digest();
  }
}
module.exports = SHA256Hash;
