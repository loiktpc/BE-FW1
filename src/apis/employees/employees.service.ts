import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpMessage } from 'src/global/globalEnum';
import { Employees } from './schemas/employees.schema';
import { EmployeesDto } from './dto/employees.dto';

@Injectable()
export class EmployeesService {
  private Regexidmogo = /^[0-9a-fA-F]{24}$/;
  constructor(@InjectModel(Employees.name) private EmployeesModel: Model<Employees>) {}

  async create(createCatDto: EmployeesDto): Promise<Employees> {
    const createdCat = new this.EmployeesModel(createCatDto);
    return createdCat.save();
  }
  
  async findAll(): Promise<Employees[]> {
    return this.EmployeesModel.find().exec();
  }
  async findOne(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return await this.EmployeesModel.findById(id).exec();
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async delete(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      await this.EmployeesModel.findByIdAndDelete(id);
      return null;
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async update(id: string , dataDTO :EmployeesDto ): Promise<any>{
    if (id.match(this.Regexidmogo)) {
      return this.EmployeesModel.findByIdAndUpdate(id, dataDTO)    
   }else {
     return HttpMessage.NOTDATA;
   }
  }
}
