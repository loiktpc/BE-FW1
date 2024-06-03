import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          useremail: 'admin@fpt.edu.vn',
          password: '123456',
        },
        {
          userId: 2,
          useremail: 'loikt',
          password: '1234567',
        },
      ];
    
      async findOne(useremail: string): Promise<User | undefined> {
        return this.users.find(user => user.useremail === useremail);
      }
}
