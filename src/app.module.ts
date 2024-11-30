import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QrCodeModule } from './qr-code/qr-code.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017', {
      dbName: 'mongo',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    QrCodeModule,
  ],
})
export class AppModule {}
