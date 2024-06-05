import { Get, Injectable, Param } from '@nestjs/common';
import { LibsodiumService } from './libsodium/libsodium.service';

@Injectable()
export class AppService {

  constructor(private libsodium: LibsodiumService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async teste(@Param('text') text: string): Promise<any> {
    const key_pair = await this.libsodium.generate_key_pair();
    console.log(key_pair);
    console.log("Par de chaves");
    const encryptedValue = await this.libsodium.encrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, text);
    console.log(encryptedValue);
    console.log("Valor encriptado");
    const decryptedValue = await this.libsodium.decrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, encryptedValue);
    return {
      key_pair,
      public_key: key_pair.publicKey,
      private_key: key_pair.privateKey,
      encryptedValue,
      decryptedValue
    }
  }
}
