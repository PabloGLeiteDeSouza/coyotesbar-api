import { Test, TestingModule } from '@nestjs/testing';
import { LibsodiumService } from './libsodium.service';

describe('LibsodiumService', () => {
  let service: LibsodiumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibsodiumService],
    }).compile();

    service = module.get<LibsodiumService>(LibsodiumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
