import { Module } from '@nestjs/common';
import { LibsodiumService } from './libsodium.service';

@Module({
    providers: [LibsodiumService],
    exports: [LibsodiumService],
})
export class LibsodiumModule {}
