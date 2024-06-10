import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(auth: any): Promise<any> {
    console.log("abriu aqui")
    const user = await this.authService.validateUserLocal(auth);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
