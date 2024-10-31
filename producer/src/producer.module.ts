import { Module } from '@nestjs/common';
import { RabbitMQModule } from './rabbitmq.module';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';

@Module({
  imports: [RabbitMQModule],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
