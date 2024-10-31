import { Module } from '@nestjs/common';
import { ProducerModule } from './producer.module';

@Module({
  imports: [ProducerModule],
})
export class AppModule {}
