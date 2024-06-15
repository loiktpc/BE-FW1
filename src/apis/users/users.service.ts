import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          useremail: 'admin@fpt.edu.vn',
          password: '123456',
          roles: Role.Admin
        },
        {
          userId: 2,
          useremail: 'loikt@fpt.edu.vn',
          password: '1234567',
          roles: Role.User
        },
      ];
    
      async findOne(useremail: string): Promise<User | undefined> {
        return this.users.find(user => user.useremail === useremail);
      }
}
