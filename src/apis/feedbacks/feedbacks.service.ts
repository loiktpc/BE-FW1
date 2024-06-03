import {  Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Feedback, FeedbacksDocument } from './schemas/feedbacks.schema';
import { FeedbacksrDto } from './dto/feedbacks.dto';
import { IFeedback } from './interfaces/feedbacks.interfaces';
import { HttpMessage } from 'src/global/globalEnum';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectModel(Feedback.name)
    private feedbacksModel: Model<Feedback>,
  ) {}
  async create(createFeedBacksDto: FeedbacksrDto): Promise<Feedback> {
    const createdCat = new this.feedbacksModel(createFeedBacksDto);
    return createdCat.save();
  }
  async findAll(): Promise<IFeedback[]> {
    return await this.feedbacksModel.find().exec();
  }

  async findOne(id: string): Promise<any>{
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return  await this.feedbacksModel.findById(id).exec();
    }else {
      return HttpMessage.NOTDATA;
    }
  }
  
  async delete(id: string): Promise<any>{
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
       await this.feedbacksModel.findByIdAndDelete(id)
       return null
    }else {
      return HttpMessage.NOTDATA;
    }
    
  }
  async update(id: string , dataDTO :IFeedback ): Promise<any>{
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return this.feedbacksModel.findByIdAndUpdate(id, dataDTO)    
   }else {
     return HttpMessage.NOTDATA;
   }
  }
}
