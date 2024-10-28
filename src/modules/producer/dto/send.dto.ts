import { IsNotEmpty, IsString } from 'class-validator';

export class SendDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
