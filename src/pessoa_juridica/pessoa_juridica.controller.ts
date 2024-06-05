import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoaJuridicaService } from './pessoa_juridica.service';
import { CreatePessoaJuridicaDto } from './dto/create-pessoa_juridica.dto';
import { UpdatePessoaJuridicaDto } from './dto/update-pessoa_juridica.dto';

@Controller('pessoa-juridica')
export class PessoaJuridicaController {
  constructor(private readonly pessoaJuridicaService: PessoaJuridicaService) {}

  @Post()
  create(@Body() createPessoaJuridicaDto: CreatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.create(createPessoaJuridicaDto);
  }

  @Get()
  findAll() {
    return this.pessoaJuridicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaJuridicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaJuridicaDto: UpdatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.update(+id, updatePessoaJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaJuridicaService.remove(+id);
  }
}
