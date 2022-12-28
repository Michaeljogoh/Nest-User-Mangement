import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key'

@Module({
  imports: [UserModule, AuthModule , MongooseModule.forRoot(config.MongoURI)],
})
export class AppModule {}
