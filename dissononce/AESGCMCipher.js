const crypto = require('crypto');
const Cipher = require('./Cipher');

const generateHeader = (num, len = 6) => {
  let str = Number(num).toString(16);
  str = new Array(len - str.length + 1).join('0') + str;
  return Buffer.from(str, 'hex');
};

class AESGCMCipher extends Cipher {
  constructor() {
    super('AESGCM');
  }

  encrypt(params, key, aad, iiv = 0, encode = '') {
    const keyBuffer = typeof key === 'string' ? Buffer.from(key, 'base64') : key;
    const iv = typeof iiv === 'object' ? iiv : generateHeader(iiv, 24);
    const paramsBuffer = typeof params === 'string' ? Buffer.from(params, 'base64') : params;
    const cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, iv);
    if (aad) cipher.setAAD(typeof aad === 'string' ? Buffer.from(aad, 'base64') : aad);
    const outputs = [];
    outputs.push(cipher.update(paramsBuffer));
    outputs.push(cipher.final());
    outputs.push(cipher.getAuthTag());
    if (encode) return Buffer.concat(outputs).toString(encode);
    return Buffer.concat(outputs);
  }

  decrypt(params, key, aad, iiv = 0, encode = '') {
    const keyBuffer = typeof key === 'string' ? Buffer.from(key, 'base64') : key;
    const iv = typeof iiv === 'object' ? iiv : generateHeader(iiv, 24);
    const paramsBuffer = typeof params === 'string' ? Buffer.from(params, 'base64') : params;
    const authTag = paramsBuffer.slice(-16);
    const dataBuffer = paramsBuffer.slice(0, -16);

    const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv);
    decipher.setAuthTag(authTag);
    if (aad) decipher.setAAD(typeof aad === 'string' ? Buffer.from(aad, 'base64') : aad);
    const outputs = [];
    outputs.push(decipher.update(dataBuffer));
    outputs.push(decipher.final());
    if (encode) return Buffer.concat(outputs).toString(encode);
    return Buffer.concat(outputs);
  }
}

module.exports = AESGCMCipher;
