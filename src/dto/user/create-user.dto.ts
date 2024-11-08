import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../enum/role.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  username: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  password: string;

  @ApiProperty({ example: [Role.Student], description: 'The roles of the user' })
  roles: Role[];

  @ApiProperty({ example: '2024-11-08T00:00:00.000Z', description: 'The creation date of the user' })
  createdAt: Date;
}