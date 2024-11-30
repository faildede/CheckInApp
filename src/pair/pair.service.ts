import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Pair } from 'src/entities/pair.entity';
import * as QRCode from 'qrcode';

@Injectable()
export class PairService implements OnModuleInit {
  constructor(@InjectModel(Pair.name) private pairModel: Model<Pair>) {}

  async onModuleInit() {
    setInterval(async () => {
      const pairs = await this.pairModel.find().exec();
      for (const pair of pairs) {
        await this.updateQRCode(pair._id.toString());
      }
    }, 60000);
  }

  async createPair(name: string, time: string): Promise<Pair> {
    const qrCode = await this.generateQRCode();
    const newPair = new this.pairModel({ name, time, qrCode });
    return newPair.save();
  }

  async generateQRCode(): Promise<string> {
    const qrCodeData = Math.random().toString(36).substring(2, 15);
    return QRCode.toDataURL(qrCodeData);
  }

  async updateQRCode(pairId: string): Promise<Pair> {
    const qrCode = await this.generateQRCode();
    return this.pairModel.findByIdAndUpdate(pairId, { qrCode }, { new: true });
  }

  async addStudent(pairId: string, studentId: string): Promise<Pair> {
    return this.pairModel.findByIdAndUpdate(pairId, { $push: { students: new Types.ObjectId(studentId) } }, { new: true });
  }

  async getPair(pairId: string): Promise<Pair> {
    return this.pairModel.findById(pairId).populate('students').exec();
  }
}