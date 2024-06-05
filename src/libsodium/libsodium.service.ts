import { Injectable } from '@nestjs/common';

@Injectable()
export class LibsodiumService {
    
    private sodium = import("libsodium-wrappers");
    
    async generate_key_pair() {
        await (await this.sodium).ready;
        const sodium = (await this.sodium);
        const keyPair = sodium.crypto_box_keypair();
        return keyPair;
    }

    async string_to_uint_8_array(value: string) {
        await (await this.sodium).ready;
        const sodium = (await this.sodium);
        return sodium.from_string(value);
    }

    async uint_8_array_to_string(value: Uint8Array){
        await (await this.sodium).ready;
        const sodium = (await this.sodium);
        return sodium.to_string(value);
    }

    async encrypt_with_public_and_private_keys(public_key: Uint8Array, private_key: Uint8Array, value: string) {
        
        await (await this.sodium).ready;
        const sodium = (await this.sodium);
        const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
        const encryptedValue = sodium.crypto_box_easy(value, nonce, public_key, private_key);
        const result = new Uint8Array(nonce.length + encryptedValue.length);
        result.set(nonce, 0);
        result.set(encryptedValue, nonce.length);
        return sodium.to_hex(result);
    }

    async decrypt_with_public_and_private_keys(public_key: Uint8Array, private_key: Uint8Array, encryptedValue: string) {
        await (await this.sodium).ready;
        const sodium = (await this.sodium);
        const nonce = sodium.from_hex(encryptedValue).slice(0, sodium.crypto_secretbox_NONCEBYTES);
        const encryptedValueBytes = sodium.from_hex(encryptedValue).slice(sodium.crypto_secretbox_NONCEBYTES);
        const decryptedValue = sodium.crypto_box_open_easy(encryptedValueBytes, nonce, public_key, private_key);
        return sodium.to_string(decryptedValue);
    }
}
