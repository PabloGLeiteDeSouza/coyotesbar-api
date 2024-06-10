import { Injectable } from '@nestjs/common';
import { CreatePessoaJuridicaDto } from './dto/create-pessoa_juridica.dto';
import { UpdatePessoaJuridicaDto } from './dto/update-pessoa_juridica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaJuridicaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaJuridicaDto: CreatePessoaJuridicaDto) {
    return this.prisma.pessoa_juridica.create({ data: createPessoaJuridicaDto });
  }

  findAll() {
    return this.prisma.pessoa_juridica.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoa_juridica.findUnique({ where: { id } });
  }

  update(id: number, updatePessoaJuridicaDto: UpdatePessoaJuridicaDto) {
    return this.prisma.pessoa_juridica.update({ where: { id }, data: updatePessoaJuridicaDto });
  }

  remove(id: number) {
    return this.prisma.pessoa_juridica.delete({ where: { id } });
  }
}
