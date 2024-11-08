import { Role } from '../enum/role.enum';

export interface JwtPayload {
  email: string;
  roles: Role[];
}