import { Module } from '@nestjs/common';
import { LibsodiumService } from './libsodium.service';

@Module({
    exports: [LibsodiumService]
})
export class LibsodiumModule {}
