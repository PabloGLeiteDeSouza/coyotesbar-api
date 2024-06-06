import { Get, Injectable, Param } from '@nestjs/common';
import { LibsodiumService } from './libsodium/libsodium.service';

@Injectable()
export class AppService {

  constructor(private libsodium: LibsodiumService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async teste(@Param('senha') senha: string): Promise<any> {
    return senha;
    // const key_pair = await this.libsodium.generate_key_pair();
    // console.log(key_pair);
    // console.log("Par de chaves");
    // const encryptedValue = await this.libsodium.encrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, senha);
    // console.log(encryptedValue);
    // console.log("Valor encriptado");
    // const decryptedValue = await this.libsodium.decrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, encryptedValue);
    // return JSON.stringify({
    //   encryptedValue,
    //   decryptedValue
    // });
  }
}
