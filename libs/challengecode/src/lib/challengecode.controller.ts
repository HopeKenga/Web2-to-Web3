import { Body, Controller, Post } from '@nestjs/common';
import { ChallengecodeService } from './challengecode.service';

@Controller('v1')
export class ChallengecodeController {
  constructor(private challengecodeService: ChallengecodeService) {}
  @Post('challengecode')
  async getChallengeCode(@Body() req: {address: string}) {
    const {address} = req
    return await this.challengecodeService.getChallengeCode(address);
  }
}
