import { Controller, Delete, Param , Put} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/jwt/jwt.guards';
import { UserDetails } from './interface/user-detail.interface';
import { UserService } from './user.service';
import { UserDocument } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Update user Account
  @Put(':id')
  update(@Param('id') id: string, user: UserDocument): Promise<UserDetails> {
    return this.userService.update(id, user);
  }

  // Delete User Account
  @UseGuards(JwtGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<UserDetails> {
    return this.userService.delete(id);
  }
}
