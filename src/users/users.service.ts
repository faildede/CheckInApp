import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user/create-user.dto'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserEntity>,
  ) {}

  async findOneBy(email: string): Promise<UserEntity | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const createdUser = new this.userModel({
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return createdUser.save();
  }
}