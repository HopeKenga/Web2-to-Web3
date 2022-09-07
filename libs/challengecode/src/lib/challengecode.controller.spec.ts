import { Test } from '@nestjs/testing';
import { ChallengecodeController } from './challengecode.controller';
import { ChallengecodeService } from './challengecode.service';

describe('ChallengecodeController', () => {
  let controller: ChallengecodeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChallengecodeService],
      controllers: [ChallengecodeController],
    }).compile();

    controller = module.get(ChallengecodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
