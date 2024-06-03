import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Staffs } from './schemas/staffs.schema';
import { Model } from 'mongoose';
import { StaffsDto } from './dto/staffs.dto';
import { HttpMessage } from 'src/global/globalEnum';

@Injectable()
export class StaffsService {
  private Regexidmogo = /^[0-9a-fA-F]{24}$/;
  constructor(@InjectModel(Staffs.name) private StaffModel: Model<Staffs>) {}

  async create(createCatDto: StaffsDto): Promise<Staffs> {
    const createdCat = new this.StaffModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Staffs[]> {
    return this.StaffModel.find().exec();
  }
  async findOne(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return await this.StaffModel.findById(id).exec();
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async delete(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      await this.StaffModel.findByIdAndDelete(id);
      return null;
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async update(id: string , dataDTO :StaffsDto ): Promise<any>{
    if (id.match(this.Regexidmogo)) {
      return this.StaffModel.findByIdAndUpdate(id, dataDTO)    
   }else {
     return HttpMessage.NOTDATA;
   }
  }
}
