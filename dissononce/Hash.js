const crypto = require('crypto');

class Hash {
  constructor(name, hashlen, blocklen) {
    this._name = name;
    this._hashlen = hashlen;
    this._blocklen = blocklen;
  }

  get name() {
    return this._name;
  }

  get hashlen() {
    return this._hashlen;
  }

  get blocklen() {
    return this._blocklen;
  }

  hash(message, type = 'md5', encode = 'base64') {
    return crypto
      .createHash(type)
      .update(message)
      .digest(encode);
  }

  hmac_hash(key, message, type = 'sha256', encode = 'base64') {
    const hmac = crypto.createHmac(type, this.toBuffer(key));
    hmac.update(this.toBuffer(message));
    return hmac.digest(encode);
  }

  toBuffer(plaintext) {
    return typeof plaintext === 'string'
      ? Buffer.from(plaintext, 'base64')
      : Buffer.from(plaintext);
  }

  hkdf(chaining_key, input_key_material, num_outputs = 2) {
    const temp_key = this.hmac_hash(chaining_key, input_key_material);
    const output1 = this.hmac_hash(temp_key, Buffer.from([0x01]));
    const output2 = this.hmac_hash(
      temp_key,
      Buffer.concat([this.toBuffer(output1), Buffer.from([0x02])])
    );
    if (num_outputs === 2) {
      return [output1, output2];
    }
    const output3 = this.hmac_hash(
      temp_key,
      Buffer.concat([this.toBuffer(output2), Buffer.from([0x03])])
    );
    return [output1, output2, output3];
  }
}

module.exports = Hash;
