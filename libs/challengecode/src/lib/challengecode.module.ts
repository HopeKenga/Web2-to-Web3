import { Module } from '@nestjs/common';
import { ChallengecodeController } from './challengecode.controller';
import { ChallengecodeService } from './challengecode.service';

@Module({
  controllers: [ChallengecodeController],
  providers: [ChallengecodeService],
  exports: [ChallengecodeService],
})
export class ChallengecodeModule {}
