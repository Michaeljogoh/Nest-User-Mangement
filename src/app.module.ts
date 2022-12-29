import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key';
import { ConfigModule } from '@nestjs/config';
import { PictureModule } from './picture/picture.module';



@Module({
  imports: [ ConfigModule.forRoot({ isGlobal : true }),PictureModule, UserModule, AuthModule, MongooseModule.forRoot(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })],

})
export class AppModule {}
