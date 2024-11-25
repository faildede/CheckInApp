import { Injectable } from "@nestjs/common";
import * as QRCode from "qrcode";

@Injectable()
export class QrCodeService { 
    async generateQrCode(text: string): Promise<string> { 
        try {
            return await QRCode.toDataURL(text);
        } catch (err) {
            throw new Error(`Unable to generate QR code: ${err.message}`);
        }
    }
 }