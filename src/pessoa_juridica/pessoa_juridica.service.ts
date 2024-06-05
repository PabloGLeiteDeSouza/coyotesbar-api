import { Injectable } from '@nestjs/common';
import { CreatePessoaJuridicaDto } from './dto/create-pessoa_juridica.dto';
import { UpdatePessoaJuridicaDto } from './dto/update-pessoa_juridica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaJuridicaService {

  constructor(private prisma: PrismaService) {}

  create(createPessoaJuridicaDto: CreatePessoaJuridicaDto) {
    return 'This action adds a new pessoaJuridica';
  }

  findAll() {
    return `This action returns all pessoaJuridica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoaJuridica`;
  }

  update(id: number, updatePessoaJuridicaDto: UpdatePessoaJuridicaDto) {
    return `This action updates a #${id} pessoaJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoaJuridica`;
  }
}
