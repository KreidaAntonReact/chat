import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories';
import { UserEntity } from './entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    const createUser = new UserEntity(createUserDto);

    return this.userRepository.create(createUser);
  }
}
