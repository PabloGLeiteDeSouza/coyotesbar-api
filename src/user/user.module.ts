import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LibsodiumModule } from 'src/libsodium/libsodium.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, LibsodiumModule],
  exports: [UserService]
})
export class UserModule {}
