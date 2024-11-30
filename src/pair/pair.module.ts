import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PairService } from './pair.service';
import { PairController } from './pair.controller';
import { Pair, PairSchema } from '../entities/pair.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pair.name, schema: PairSchema }]),
  ],
  providers: [PairService],
  controllers: [PairController],
})
export class PairModule {}