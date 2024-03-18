const curve = require('curve25519-n');

class DH {
  constructor(name, dhlen) {
    this._name = name;
    this._dhlen = dhlen;
  }

  get name() {
    return this._name;
  }

  get dhlen() {
    return this._dhlen;
  }

  toBuffer(plaintext) {
    if (typeof plaintext === 'undefined') return Buffer.alloc(0);
    return typeof plaintext === 'string'
      ? Buffer.from(plaintext, 'base64')
      : Buffer.from(plaintext);
  }

  dh(keyPair, key) {
    const privateKey = curve.makeSecretKey(this.toBuffer(keyPair.private));
    const aeskey = curve.deriveSharedSecret(privateKey, this.toBuffer(key)).toString('base64');
    return Buffer.from(aeskey, 'base64');
  }
}

module.exports = DH;
