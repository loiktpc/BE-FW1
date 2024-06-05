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
import { OrdersDto } from './dto/orders.dto';
import { IOrders } from './interfaces/orders.interfaces';
import { OrdersService } from './orders.service';

  
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @Get()
    async findAll(): Promise<ResPonsData<IOrders[]>> {
      try {
        return new ResPonsData(
          await this.ordersService.findAll(),
          HttpStatus.OK,
          HttpMessage.SUCCESS,
        );
      } catch (error) {
        return new ResPonsData(
          await this.ordersService.findAll(),
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessage.ERROR,
        );
      }
    }
    @Post()
    async create(
      @Body() createStaffsDto: OrdersDto,
    ): Promise<ResPonsData<IOrders>> {
      try {
        return new ResPonsData(
          await this.ordersService.create(createStaffsDto),
          HttpStatus.OK,
          HttpMessage.SUCCESS,
        );
      } catch (error) {
        
        return new ResPonsData(
          await this.ordersService.create(createStaffsDto),
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessage.ERROR,
        );
      }
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ResPonsData<IOrders>> {
      try {
        return new ResPonsData<IOrders>(
          await this.ordersService.findOne(id),
          HttpStatus.OK,
          HttpMessage.SUCCESS,
        );
      } catch (error) {
        return new ResPonsData<IOrders>(
          await this.ordersService.findOne(id),
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessage.ERROR,
        );
      }
    }
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<ResPonsData<IOrders>> {
      try {
        return new ResPonsData<IOrders>(
          await this.ordersService.delete(id),
          HttpStatus.OK,
          HttpMessage.SUCCESS,
        );
      } catch (error) {
        return new ResPonsData<IOrders>(
          await this.ordersService.delete(id),
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessage.ERROR,
        );
      }
    }
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateStaffsDto: OrdersDto,
    ): Promise<ResPonsData<IOrders>> {
      try {
        return new ResPonsData<IOrders>(
          await this.ordersService.update(id, updateStaffsDto),
          HttpStatus.OK,
          HttpMessage.SUCCESS,
        );
      } catch (error) {
        
        return new ResPonsData<IOrders>(
          await this.ordersService.update(id, updateStaffsDto),
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessage.ERROR,
        );
      }
    }
}
  