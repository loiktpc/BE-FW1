import { IsNotEmpty, IsEmail } from 'class-validator';

export class CustomersDto {
    @IsNotEmpty({ message: 'vui lòng nhập tên' })
    username: string;
    @IsEmail()
    @IsNotEmpty({ message: 'vui lòng nhập nội dung' })
    email: string;
    @IsNotEmpty({ message: 'vui lòng nhập huấn luyện viên' })
    phone: string;

  

}