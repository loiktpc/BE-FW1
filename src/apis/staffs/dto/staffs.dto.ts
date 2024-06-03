import { IsNotEmpty, IsEmail, Length, IsString } from 'class-validator';

export class StaffsDto {
    @IsNotEmpty({ message: 'vui lòng nhập tên' })
    username: string;
    @IsNotEmpty({ message: 'vui lòng nhập nội dung' })
    content: string;
    @IsNotEmpty({ message: 'vui lòng nhập huấn luyện viên' })
    trainers: string;

}