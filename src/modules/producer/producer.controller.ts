import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { SendDto } from './dto/send.dto';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('send')
  async send(@Body() sendDto: SendDto) {
    return this.producerService.sendMessage(sendDto);
  }
}
