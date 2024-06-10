import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LibsodiumService } from 'src/libsodium/libsodium.service';
import { AuthData, UserDataType } from 'src/types';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService, 
        private libsodium: LibsodiumService,
        private jwtService: JwtService,
    ){}

    async validateUserLocal(auth: AuthData): Promise<any>{
        const { login, senha } = auth;
        const user = login.includes("@") && login.includes(".") ? await this.userService.findByEmail(login) : await this.userService.findByUsername(login);
        if (!user) {
            return null
        }
        const private_key = await this.libsodium.hex_to_uint_8_array(user.private_key)
        const public_key = await this.libsodium.hex_to_uint_8_array(user.public_key)
        const password = await this.libsodium.decrypt_with_public_and_private_keys(public_key, private_key, user.password);
        if (password === senha) {
            const { password, ...result } = user;
            return result
        }
        return null;
    }

    async login(user: UserDataType) {
        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
