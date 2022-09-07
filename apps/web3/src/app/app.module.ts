import { ChallengecodeModule } from '@interview/challengecode';
import { DAuthModule } from '@interview/d-auth';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DAuthModule,
    ChallengecodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
