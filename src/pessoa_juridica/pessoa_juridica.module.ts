import { Module } from '@nestjs/common';
import { PessoaJuridicaService } from './pessoa_juridica.service';
import { PessoaJuridicaController } from './pessoa_juridica.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PessoaJuridicaController],
  providers: [PessoaJuridicaService],
  imports: [PrismaModule],
})
export class PessoaJuridicaModule {}
