import { Injectable } from '@nestjs/common';
import { CreatePessoaFisicaDto } from './dto/create-pessoa_fisica.dto';
import { UpdatePessoaFisicaDto } from './dto/update-pessoa_fisica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaFisicaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaFisicaDto: CreatePessoaFisicaDto) {
    return 'This action adds a new pessoaFisica';
  }

  findAll() {
    return `This action returns all pessoaFisica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoaFisica`;
  }

  update(id: number, updatePessoaFisicaDto: UpdatePessoaFisicaDto) {
    return `This action updates a #${id} pessoaFisica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoaFisica`;
  }
}
