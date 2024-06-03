import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { Customers, CustomersSchema } from './schemas/customers.schema';
// import { Staffs, StaffsSchema } from './schemas/staffs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Customers.name, schema: CustomersSchema }])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
