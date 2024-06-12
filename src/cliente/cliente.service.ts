import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {

  constructor(private prisma: PrismaService) {}

  create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({ data: createClienteDto });
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  async findClientsWithName(){
    const dados = [];
    const clientes = await this.prisma.cliente.findMany();
    clientes.forEach( async cliente => { 
      const { id_pessoa } = cliente;
      const pessoa = await this.prisma.pessoa.findUnique({ where: { id: id_pessoa }});
      dados.push({ name: pessoa.nome, id: pessoa.id })
    })
    return dados;
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where: {id}});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({ where: { id }, data: updateClienteDto});
  }

  remove(id: number) {
    return this.prisma.cliente.delete({where: { id }});
  }
}
