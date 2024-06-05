import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Orders, OrdersSchema } from './schemas/orders.schemas';
import { Products , ProductsSchema } from '../products/schemas/producsts.schema';
import { Customers, CustomersSchema } from '../customers/schemas/customers.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }]),
  MongooseModule.forFeature([{ name: Products.name, schema: ProductsSchema }]) ,
  MongooseModule.forFeature([{ name: Customers.name, schema: CustomersSchema }]) ]  ,
  
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
