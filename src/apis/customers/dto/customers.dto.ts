import { IsNotEmpty, IsEmail } from 'class-validator';

export class CustomersDto {
    @IsNotEmpty({ message: 'vui lòng nhập tên' })
    username: string;
    @IsEmail()
    @IsNotEmpty({ message: 'vui lòng nhập email' })
    email: string;
    @IsNotEmpty({ message: 'vui lòng nhập số điện thoại' })
    phone: string;

  

}