import { Test } from '@nestjs/testing';
import { DAuthController } from './d-auth.controller';
import { DAuthService } from './d-auth.service';

describe('DAuthController', () => {
  let controller: DAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DAuthService],
      controllers: [DAuthController],
    }).compile();

    controller = module.get(DAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
