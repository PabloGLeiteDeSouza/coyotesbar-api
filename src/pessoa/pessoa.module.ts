import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService],
  imports: [PrismaModule],
})
export class PessoaModule {}
