import { IsNotEmpty, IsEmail} from 'class-validator';

export class userDto {
    @IsNotEmpty({ message: 'vui lòng nhập nhập email' })
    @IsEmail()
    useremail: string;
    @IsNotEmpty({ message: 'vui lòng nhập nhập mật khẩu' })
    password: string
}