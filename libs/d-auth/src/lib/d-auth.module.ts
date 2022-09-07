import { AuthModule } from '@interview/auth';
import { UserModule } from '@interview/user';
import { Module } from '@nestjs/common';
import { DAuthController } from './d-auth.controller';
import { DAuthService } from './d-auth.service';

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
  controllers: [DAuthController],
  providers: [DAuthService],
  exports: [DAuthService],
})
export class DAuthModule {}
