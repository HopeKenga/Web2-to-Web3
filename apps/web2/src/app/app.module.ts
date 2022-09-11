import { AuthModule } from '@interview/auth';
import { UserModule } from '@interview/user';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env.local', '.env'],
    }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//when building using nx, everything is a library. NX is able to support a laarge number of frameworks.
//Like building with lego pieces. Same lego in vue is the same in react or angular. All lego pieces can be used independently and together.
//when using a redux state manager, there's no need to rewrite actions and the reducer. There's a lot of reusability especially on cross platform development.
//We have one repo which is easily manageable. It allows us to have everything including shared functions in one repo.
//when building an app, picture it as a lego, not building from the ground up .
// Using a monorepo allows you to stack it up with libraries.
//when installing nestjs, it comes the architecture of our application
//the app is the core of our application. Nx allows scabiility to be a non-issue.A library is not bound to one part
