const SymmetricState = require('./SymmetricState');

class WASymmetricState extends SymmetricState {
  encrypt_and_hash(plaintext) {
    const ciphertext = this._cipherstate.encrypt_with_ad(this._h, this.toBuffer(plaintext));
    if (this._cipherstate.has_key()) this.mix_hash(ciphertext);
    return ciphertext;
  }
}

module.exports = WASymmetricState;
