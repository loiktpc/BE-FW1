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
import { CustomersDto } from './dto/customers.dto';

import { CustomersService } from './customers.service';
import { ResPonsData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { ICustomers } from './interfaces/customers.interface';

@Controller('customers')
export class CustomersController {
  constructor(private readonly CustomersService: CustomersService) {}
  @Get()
  async findAll(): Promise<ResPonsData<ICustomers[]>> {
    try {
      return new ResPonsData(
        await this.CustomersService.findAll(),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.CustomersService.findAll(),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  async create(
    @Body() createStaffsDto: CustomersDto,
  ): Promise<ResPonsData<ICustomers>> {
    try {
      return new ResPonsData(
        await this.CustomersService.create(createStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.CustomersService.create(createStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPonsData<ICustomers>> {
    try {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.findOne(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.findOne(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResPonsData<ICustomers>> {
    try {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.delete(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.delete(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStaffsDto: CustomersDto,
  ): Promise<ResPonsData<ICustomers>> {
    try {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.update(id, updateStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<ICustomers>(
        await this.CustomersService.update(id, updateStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
