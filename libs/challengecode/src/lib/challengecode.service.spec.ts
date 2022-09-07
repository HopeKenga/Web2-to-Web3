import { Test } from '@nestjs/testing';
import { ChallengecodeService } from './challengecode.service';

describe('ChallengecodeService', () => {
  let service: ChallengecodeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChallengecodeService],
    }).compile();

    service = module.get(ChallengecodeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
