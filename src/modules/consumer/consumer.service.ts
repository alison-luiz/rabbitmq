import { Injectable } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class ConsumerService {
  @EventPattern('main_queue')
  async getMessage(@Payload() data: string, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    console.log(`Mensagem recebida: ${data}`);
    channel.ack(originalMsg);
  }
}
