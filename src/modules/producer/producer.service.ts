import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendDto } from './dto/send.dto';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('RABBITMQ_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  async sendMessage(sendDto: SendDto) {
    try {
      this.client.emit('main_queue', sendDto.message);
      console.log(`Mensagem enviada: ${sendDto.message}`);
    } catch (error) {
      console.error(error);
    }
  }
}
