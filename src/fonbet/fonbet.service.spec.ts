import { Test, TestingModule } from '@nestjs/testing';
import { FonbetService } from './fonbet.service';

describe('FonbetService', () => {
  let service: FonbetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonbetService],
    }).compile();

    service = module.get<FonbetService>(FonbetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
