import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/interface/user-detail.interface';
import { ExistingUserDTO } from 'src/user/dto/existing-user.dto';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(private userService: UserService , private jwtService : JwtService) {}

  //   Hashed Password
  async hashedPassword(password: string): Promise<string> {
    return  await bcrypt.hash(password, 12);
  }

  //   Register
  async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) return 'Email already exist!!!';

    const hashedPassword = await this.hashedPassword(password);

    const newUser = await this.userService.create(name, email, hashedPassword);

    return this.userService._getUserDetails(newUser)
  }

  // Does password match
  async doesPasswordMatch(password : string , hashedPassword: string): Promise<boolean>{
    return await bcrypt.compare(password , hashedPassword);
  }

  // Validate user

  async validateUser(email : string , password: string) : Promise<UserDetails | null>{
    const user = await this.userService.findByEmail(email)
    if(!user) throw new HttpException('Email Already Exist!!!', HttpStatus.BAD_REQUEST);

    const doesPasswordMatch = await this.doesPasswordMatch(password , user.password);

    if(!doesPasswordMatch)throw new HttpException('Password does not match', HttpStatus.BAD_REQUEST);

    return this.userService._getUserDetails(user)
  }


  async login( existingUser : ExistingUserDTO): Promise<{token : string} | null>{
    const {email , password} = existingUser;

    const user = await this.validateUser(email , password);

    if(!user) return null;
    
    const jwt = await this.jwtService.signAsync({ user });

    return {token : jwt}
  }
}
