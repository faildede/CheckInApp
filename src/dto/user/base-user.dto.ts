import { ApiProperty } from "@nestjs/swagger";

export class BaseUser {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  username?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  pasword: string;

  @ApiProperty()
  confirmPassword: string;

  @ApiProperty()
  designation?: string;
}