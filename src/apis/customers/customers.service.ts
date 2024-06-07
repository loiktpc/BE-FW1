import { Customers } from './schemas/customers.schema';
import { CustomersDto } from './dto/customers.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpMessage } from 'src/global/globalEnum';

@Injectable()
export class CustomersService {
  private Regexidmogo = /^[0-9a-fA-F]{24}$/;
  constructor(@InjectModel(Customers.name) private CustomersModel: Model<Customers>) {}

  async create(createCatDto: CustomersDto): Promise<Customers> {
    const createdCat = new this.CustomersModel(createCatDto);
    return createdCat.save();
  }

  async findAll(page , numberofProduct): Promise<Customers[]> {
    let Npage  =  Number(page) || 1
    let NnumberofProduct = Number(numberofProduct)
    return this.CustomersModel.find()
    .skip((NnumberofProduct * Npage) - NnumberofProduct) 
    .limit(NnumberofProduct)
    .exec();;
  }
  async findOne(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return await this.CustomersModel.findById(id).exec();
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async delete(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      await this.CustomersModel.findByIdAndDelete(id);
      return null;
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async update(id: string , dataDTO :CustomersDto ): Promise<any>{
    if (id.match(this.Regexidmogo)) {
      return this.CustomersModel.findByIdAndUpdate(id, dataDTO)    
   }else {
     return HttpMessage.NOTDATA;
   }
  }
}
