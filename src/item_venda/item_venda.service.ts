import { Injectable } from '@nestjs/common';
import { CreateItemVendaDto } from './dto/create-item_venda.dto';
import { UpdateItemVendaDto } from './dto/update-item_venda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemVendaService {

  constructor(private prisma: PrismaService) {}

  create(createItemVendaDto: CreateItemVendaDto) {
    return this.prisma.item_venda.create({ data: createItemVendaDto })
  }

  findAll() {
    return this.prisma.item_venda.findMany();
  }

  findOne(id: number) {
    return this.prisma.item_venda.findUnique({ where: {id} });
  }

  update(id: number, updateItemVendaDto: UpdateItemVendaDto) {
    return this.prisma.item_venda.update({ where: {id}, data: updateItemVendaDto });
  }

  remove(id: number) {
    return this.prisma.item_venda.delete({ where: {id} });
  }
}
