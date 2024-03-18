class Cipher {
  constructor(name = '') {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  encrypt() {}

  decrypt() {}

  rekey(key) {
    return this.encrypt(Buffer.alloc(32).fill(0), key, Buffer.alloc(0), 2 ** 64 - 1);
  }
}

module.exports = Cipher;
