import { Module } from '@nestjs/common';
import { PessoaFisicaService } from './pessoa_fisica.service';
import { PessoaFisicaController } from './pessoa_fisica.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PessoaFisicaController],
  providers: [PessoaFisicaService],
  imports: [PrismaModule],
})
export class PessoaFisicaModule {}
