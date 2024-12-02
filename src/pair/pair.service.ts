import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Pair } from 'src/entities/pair.entity';
import * as QRCode from 'qrcode';
import { error } from 'console';

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
    return QRCode.toDataURL(qrCodeData, {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      margin: 1,
      width: 200,
      color: {
        dark: '#000000',
        blue: '#2f59b2',
      },
    });
  }

  async updateQRCode(pairId: string): Promise<Pair> {
    const qrCode = await this.generateQRCode();
    return this.pairModel.findByIdAndUpdate(pairId, { qrCode }, { new: true });
  }

  async addStudent(pairId: string, studentId: string): Promise<Pair> {
    return this.pairModel.findByIdAndUpdate(pairId, { $push: { students: new Types.ObjectId(studentId) } }, { new: true });
  }

  async getPair(pairId: string): Promise<Pair> {
    const pair = await this.pairModel.findById(pairId).populate('students').exec();
    if (!pair) {
      throw new Error('Pair not found');
    }
    return pair;
  }
}