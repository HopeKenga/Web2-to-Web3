import { Test } from '@nestjs/testing';
import { DAuthService } from './d-auth.service';

describe('DAuthService', () => {
  let service: DAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DAuthService],
    }).compile();

    service = module.get(DAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
