import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaFisicaDto } from './create-pessoa_fisica.dto';

export class UpdatePessoaFisicaDto extends PartialType(CreatePessoaFisicaDto) {}
