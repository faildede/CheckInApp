import { BaseUser } from "./base-user.dto";

export class CreateUserDto extends BaseUser {
  password: string;
  confirmPassword: string;
  createdAt: Date;
}