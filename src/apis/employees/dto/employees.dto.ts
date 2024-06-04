import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmployeesDto {
    @IsNotEmpty({ message: 'vui lòng nhập tên nhân viên' })
    username: string;
    @IsNotEmpty({ message: 'vui lòng nhập chức vụ' })
    position: string ;
    @IsEmail()
    @IsNotEmpty({ message: 'vui lòng nhập nội dung' })
    email: string;
    @IsNotEmpty({ message: 'vui lòng nhập Số  điện thoại' })
    phone: string;
    @IsNotEmpty({ message: 'vui lòng chọn giới tính' })
    gender: string;
  

}