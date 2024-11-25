import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { JwtAuthGuard } from '../utils/jwt-auth.guard';
import { Roles } from '../roles/roles.decorator';
import { Role } from '../enum/role.enum';

@Controller('qr-code')
export class QRCodeController {
  constructor(private qrCodeService: QrCodeService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Teacher)
  @Post('generate')
  async generateQrCode(@Body('text') text: string): Promise<{ qrCode:  string}> {
    const qrCode = await this.qrCodeService.generateQrCode(text);
    return { qrCode };
}
}