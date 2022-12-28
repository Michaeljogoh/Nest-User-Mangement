import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserDetails } from '../user/interface/user-detail.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  // Find Email
  async findByEmail(email : string) : Promise<UserDocument | null>{
  return  await this.userModel.findOne({email}).exec()
  }

  async findById(id: string) : Promise<UserDetails | null> {
    const user = await this.userModel.findOne({_id : id});
    if(!user) return null;
    return this._getUserDetails(user)
 
    }



//   Create User 

  async create(
    name: string,
    email: string,
    hashedPassword: string,
  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
    });
    return newUser.save();
  }
}
