class BaseSymmetricState {
  cipherstate_has_key() {}

  initialize_symmetric(protocolname) {}

  mix_key(input_key_material) {}

  mix_hash(data) {}

  mix_key_and_hash(input_key_material) {}

  get_handshake_hash() {}

  encrypt_and_hash(plaintext) {}

  decrypt_and_hash(ciphertext) {}

  split() {}
}
module.exports = BaseSymmetricState;
