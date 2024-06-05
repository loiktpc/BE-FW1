import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { HttpMessage } from 'src/global/globalEnum';
import { Orders } from './schemas/orders.schemas';
import { OrdersDto } from './dto/orders.dto';
import { Products } from '../products/schemas/producsts.schema';
import { Customers } from '../customers/schemas/customers.schema';

@Injectable()
export class OrdersService {
  private Regexidmogo = /^[0-9a-fA-F]{24}$/;
  constructor(@InjectModel(Orders.name) private OrdersModel: Model<Orders>) {}

  async create(createOrderDto: OrdersDto): Promise<Orders> {
    const createdCat = new this.OrdersModel(createOrderDto);
    return createdCat.save();
  }

  async findAll(): Promise<Orders[]> {
    return this.OrdersModel.find().populate(['products', 'customers']).exec();
  }
  async findOne(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return await this.OrdersModel.findById(id)
        .populate(['products', 'customers'])
        .exec();
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async delete(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      await this.OrdersModel.findByIdAndDelete(id);
      return null;
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async update(id: string, dataDTO: OrdersDto): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return this.OrdersModel.findByIdAndUpdate(id, dataDTO);
    } else {
      return HttpMessage.NOTDATA;
    }
  }
}
