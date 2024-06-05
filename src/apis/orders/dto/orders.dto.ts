import { IsNotEmpty } from 'class-validator';
import { Customers } from 'src/apis/customers/schemas/customers.schema';
import { Products } from 'src/apis/products/schemas/producsts.schema';
export class OrdersDto {
    @IsNotEmpty({ message: 'vui lòng nhập số lượng' })
    quantity: string;
    @IsNotEmpty({ message: 'vui lòng nhập trạng thái' })
    status: string ;
   
    @IsNotEmpty({ message: 'vui lòng nhập mã khách hàng' })
    customers: Customers;
    @IsNotEmpty({ message: 'vui lòng nhập mã sản phẩm' })
    products: Products;
   
  

}