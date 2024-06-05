import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LibsodiumService } from 'src/libsodium/libsodium.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private libsodium: LibsodiumService){}

    async validateUserLocal(login: string, senha: string): Promise<any>{
        const user = login.includes("@") && login.includes(".") ? await this.userService.findOneWithEmail(login) : await this.userService.findOneWithUsername(login);
        const private_key = await this.libsodium.string_to_uint_8_array(user.private_key)
        const public_key = await this.libsodium.string_to_uint_8_array(user.public_key)
        const password = await this.libsodium.decrypt_with_public_and_private_keys(public_key, private_key, user.password);
        if (password === senha) {
            return {
                user: user
            }
        } else {
            throw new UnauthorizedException();
        }
    }

}
