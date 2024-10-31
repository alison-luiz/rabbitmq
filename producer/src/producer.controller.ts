import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('send')
  async sendMessage(@Body('message') message: string) {
    await this.producerService.sendMessage(message);
  }
}
