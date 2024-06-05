import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [PrismaModule],
})
export class ProdutoModule {}
