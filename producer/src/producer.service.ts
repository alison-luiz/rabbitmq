import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  async sendMessage(message: string) {
    this.client.emit('notifications', { text: message });
    console.log(`Message sent: ${message}`);
  }
}
