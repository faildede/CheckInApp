import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Roles } from '../roles/roles.decorator';
import { RolesGuard } from '../roles/roles.guard';
import { JwtAuthGuard } from '../utils/jwt-auth.guard';
import { Role } from '../enum/role.enum';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  @ApiOperation({ summary: 'Find user by email' })
  @ApiResponse({ status: 200, description: 'The found record', type: UserEntity })
  async findOneBy(@Param('email') email: string): Promise<UserEntity | undefined> {
    return this.usersService.findOneBy(email);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }
}