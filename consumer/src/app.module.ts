import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer.module';

@Module({
  imports: [ConsumerModule],
})
export class AppModule {}
