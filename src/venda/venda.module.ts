import { Module } from '@nestjs/common';
import { VendaService } from './venda.service';
import { VendaController } from './venda.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VendaController],
  providers: [VendaService],
  imports: [PrismaModule],
})
export class VendaModule {}
