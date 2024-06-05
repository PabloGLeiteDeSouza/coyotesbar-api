import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { LibsodiumService } from 'src/libsodium/libsodium.service';

@Module({
  imports: [UserService, LibsodiumService],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
