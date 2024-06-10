import { Test, TestingModule } from '@nestjs/testing';
import { ItemVendaController } from './item_venda.controller';
import { ItemVendaService } from './item_venda.service';

describe('ItemVendaController', () => {
  let controller: ItemVendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemVendaController],
      providers: [ItemVendaService],
    }).compile();

    controller = module.get<ItemVendaController>(ItemVendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
