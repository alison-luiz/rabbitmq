import { Module } from '@nestjs/common';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { ProducerModule } from './modules/producer/producer.module';

@Module({
  imports: [ConsumerModule, ProducerModule],
})
export class AppModule {}
