import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaJuridicaDto } from './create-pessoa_juridica.dto';

export class UpdatePessoaJuridicaDto extends PartialType(CreatePessoaJuridicaDto) {}
