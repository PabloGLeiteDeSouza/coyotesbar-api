import { Test, TestingModule } from '@nestjs/testing';
import { PessoaJuridicaController } from './pessoa_juridica.controller';
import { PessoaJuridicaService } from './pessoa_juridica.service';

describe('PessoaJuridicaController', () => {
  let controller: PessoaJuridicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaJuridicaController],
      providers: [PessoaJuridicaService],
    }).compile();

    controller = module.get<PessoaJuridicaController>(PessoaJuridicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
