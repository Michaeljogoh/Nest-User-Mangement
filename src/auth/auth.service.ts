import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/interface/user-detail.interface';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

//   Hashed Password 
  async hashedPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

//   Register

async register(user: Readonly <NewUserDTO>) : Promise <UserDetails | null | string>{

    const {name , email , password} = user;

    const existingUser = await this.userService.findByEmail(email);

    if(existingUser ) return 'Email already exist!!!';

    const hashedPassword = await this.hashedPassword(password);

    const newUser = await this.userService.create(name , email , hashedPassword);

    return newUser;



}

}
