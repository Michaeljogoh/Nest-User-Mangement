import { IsEmpty, IsNotEmpty } from '@nestjs/class-validator';

export class NewUserDTO {
  @IsNotEmpty()
  name: string;
  @IsEmpty()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
