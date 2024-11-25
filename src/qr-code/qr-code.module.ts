import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QRCodeController } from './qr-code.controller';

@Module({
    providers: [QrCodeService],
    controllers: [QRCodeController],
})
export class QrCodeModule {}
