import { Injectable } from '@nestjs/common';
import { CreatePessoaFisicaDto } from './dto/create-pessoa_fisica.dto';
import { UpdatePessoaFisicaDto } from './dto/update-pessoa_fisica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaFisicaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaFisicaDto: CreatePessoaFisicaDto) {
    return this.prisma.pessoa_fisica.create({data: createPessoaFisicaDto});
  }

  findAll() {
    return this.prisma.pessoa_fisica.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoa_fisica.findUnique({ where: {id} });
  }

  findIdPessoa(id_pessoa: number){
    return this.prisma.pessoa_fisica.findUnique({ where: {id_pessoa}});
  }

  update(id: number, updatePessoaFisicaDto: UpdatePessoaFisicaDto) {
    return this.prisma.pessoa_fisica.update({ where: {id}, data: updatePessoaFisicaDto });
  }

  remove(id: number) {
    return this.prisma.pessoa_fisica.delete({ where: {id}});
  }
}
