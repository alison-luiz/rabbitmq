import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @MessagePattern('notifications')
  async handleMessage(@Payload() data: string) {
    console.log(`Message received: ${data}`);
  }
}
