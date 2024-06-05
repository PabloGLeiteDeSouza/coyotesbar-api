import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaDto: CreatePessoaDto) {
    if (createPessoaDto) {
      
    }
    return this.prisma.pessoa.create({data: createPessoaDto});
  }

  findAll() {
    return `This action returns all pessoa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return `This action updates a #${id} pessoa`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }
}
