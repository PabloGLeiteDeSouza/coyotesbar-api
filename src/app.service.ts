import { Get, Injectable, Param } from '@nestjs/common';
import { LibsodiumService } from './libsodium/libsodium.service';

type TDataRecive = {
  login: string;
  senha: string;
}

@Injectable()
export class AppService {

  crypto = import("crypto")


  constructor(private libsodium: LibsodiumService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async teste(@Param() data: TDataRecive): Promise<any> {
    console.log()
    const teste = (await this.crypto).randomBytes(32).toString('hex')
    console.log(teste)
    const key_pair = await this.libsodium.generate_key_pair();
    const encryptedValue = await this.libsodium.encrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, data.senha);
    const decryptedValue = await this.libsodium.decrypt_with_public_and_private_keys(key_pair.publicKey, key_pair.privateKey, encryptedValue);
    return JSON.stringify({
      encryptedValue,
      decryptedValue
    });
  }
}
