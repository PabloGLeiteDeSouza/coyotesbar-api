import { Module } from '@nestjs/common';
import { ItemVendaService } from './item_venda.service';
import { ItemVendaController } from './item_venda.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ItemVendaController],
  providers: [ItemVendaService],
  imports: [PrismaModule],
})
export class ItemVendaModule {}
