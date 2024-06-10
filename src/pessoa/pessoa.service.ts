import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaDto: CreatePessoaDto) {
    return this.prisma.pessoa.create({data: createPessoaDto});
  }

  findAll() {
    return this.prisma.pessoa.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({ where: {id} });
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoa.update({where: {id}, data: updatePessoaDto});
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({where:{id}});
  }
}
