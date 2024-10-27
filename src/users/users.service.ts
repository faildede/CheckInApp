import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseUser } from "src/dto/user/base-user.dto";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { UserEntity } from "src/entities/user.entity";
import { MongoRepository } from "typeorm";

@Injectable()
export class UsersService {  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>,
) { }  async findOneBy(email: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOneBy({ email: email });
  }  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
        ...createUserDto,
        createdAt: new Date(),
    });
  }
}