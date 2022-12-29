import { IsEmail, IsNotEmpty, } from '@nestjs/class-validator'
export class ExistingUserDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;
   @IsNotEmpty()
    password: string;
}