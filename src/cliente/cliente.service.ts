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
    for(const cliente of clientes){
      const { id, id_pessoa, limite } = cliente;
      const pessoa = await this.prisma.pessoa.findUnique({ where: { id: id_pessoa }});
      const pessoa_fisica = await this.prisma.pessoa_fisica.findUnique({ where: { id_pessoa: id_pessoa } });
      const enderecos = await this.prisma.endereco.findMany({ where: { pessoa_id: id_pessoa } })
      dados.push({ nome: pessoa.nome, id_pessoa: pessoa.id, limite, id, id_pessoa_fisica: pessoa_fisica.id, cpf: pessoa_fisica.cpf, data_de_nascimento: pessoa_fisica.data_de_nascimento, enderecos })
    }
    return dados;
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({where: {id}});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({ where: { id }, data: updateClienteDto});
  }

  remove(id: number) {
    return this.prisma.cliente.delete({where: { id }});
  }
}
