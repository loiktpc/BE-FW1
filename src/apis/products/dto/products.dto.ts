import { IsNotEmpty } from 'class-validator';

export class ProductsDto {
    @IsNotEmpty({ message: 'vui lòng nhập tên sản phẩm' })
    name: string;
    @IsNotEmpty({ message: 'vui lòng nhập mô tả' })
    describes: string;
    @IsNotEmpty({ message: 'vui lòng nhập giá' })
    price: string;
    @IsNotEmpty({ message: 'vui lòng nhập ảnh' })
    filename: string;
    @IsNotEmpty({ message: 'vui lòng nhập số lượng' })
    quantity: string;
    @IsNotEmpty({ message: 'vui lòng nhập nhãn hiệu' })
    brand: string;
}