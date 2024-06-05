import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbacksModule } from './apis/feedbacks/feedbacks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StaffsModule } from './apis/staffs/staffs.module';
import { CustomersModule } from './apis/customers/customers.module';
import { ProductsModule } from './apis/products/products.module';
import { EmployeesModule } from './apis/employees/employees.module';
import { OrdersModule } from './apis/orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    EmployeesModule,
    ProductsModule,
    CustomersModule,  
    StaffsModule,
    AuthModule,
    FeedbacksModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
