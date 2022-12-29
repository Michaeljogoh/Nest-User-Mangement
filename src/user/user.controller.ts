import { Controller, Delete, Param } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/jwt/jwt.guards';
import { UserDetails } from './interface/user-detail.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Delete User Account
  @UseGuards(JwtGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<UserDetails> {
    return this.userService.delete(id);
  }
}
