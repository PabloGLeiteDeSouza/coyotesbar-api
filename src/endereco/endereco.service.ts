import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {

  constructor(private prisma: PrismaService) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    return 'This action adds a new endereco';
  }

  findAll() {
    return `This action returns all endereco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} endereco`;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return `This action updates a #${id} endereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereco`;
  }
}
