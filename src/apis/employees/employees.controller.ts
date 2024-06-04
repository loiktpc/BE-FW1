import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ResPonsData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { Employees } from './schemas/employees.schema';
import { IEmployees } from './interfaces/employees.interface';
import { EmployeesService } from './employees.service';
import { EmployeesDto } from './dto/employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}
  @Get()
  async findAll(): Promise<ResPonsData<IEmployees[]>> {
    try {
      return new ResPonsData(
        await this.EmployeesService.findAll(),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.EmployeesService.findAll(),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  async create(
    @Body() createStaffsDto: EmployeesDto,
  ): Promise<ResPonsData<IEmployees>> {
    try {
      return new ResPonsData(
        await this.EmployeesService.create(createStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.EmployeesService.create(createStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPonsData<IEmployees>> {
    try {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.findOne(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.findOne(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResPonsData<IEmployees>> {
    try {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.delete(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.delete(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStaffsDto: EmployeesDto,
  ): Promise<ResPonsData<IEmployees>> {
    try {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.update(id, updateStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IEmployees>(
        await this.EmployeesService.update(id, updateStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
