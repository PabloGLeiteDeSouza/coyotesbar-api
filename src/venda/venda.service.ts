import { Injectable } from '@nestjs/common';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendaService {

  constructor(private prisma: PrismaService) {}

  create(createVendaDto: CreateVendaDto) {
    return this.prisma.venda.create({ data: createVendaDto });
  }

  listarVendasPorCliente(id_cliente: number){
    return this.prisma.venda.findMany({ where: { id_cliente } });
  }

  findAll() {
    return this.prisma.venda.findMany();
  }

  findOne(id: number) {
    return this.prisma.venda.findUnique({ where: {id} });
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    return this.prisma.venda.update({ where: { id }, data: updateVendaDto });
  }

  remove(id: number) {
    return this.prisma.venda.delete({ where: { id } });
  }
}
