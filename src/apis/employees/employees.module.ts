import { Employees, EmployeesSchema } from './schemas/employees.schema';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employees.name, schema: EmployeesSchema }])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
