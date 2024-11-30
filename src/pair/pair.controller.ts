import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';
import { PairService } from './pair.service';

@Controller('pairs')
export class PairController {
  constructor(private readonly pairService: PairService) {}

  @Post('create')
  async createPair(@Body('name') name: string, @Body('time') time: string) {
    return this.pairService.createPair(name, time);
  }

  @Put('update-qr/:id')
  async updateQRCode(@Param('id') id: string) {
    return this.pairService.updateQRCode(id);
  }

  @Put('add-student/:id')
  async addStudent(@Param('id') id: string, @Body('studentId') studentId: string) {
    return this.pairService.addStudent(id, studentId);
  }

  @Get(':id')
  async getPair(@Param('id') id: string) {
    return this.pairService.getPair(id);
  }
}