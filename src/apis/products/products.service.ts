import { ProductsDto } from './dto/products.dto';
import {   Products } from './schemas/producsts.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpMessage } from 'src/global/globalEnum';
const fs = require("fs");

@Injectable()
export class ProductsService {
  private Regexidmogo = /^[0-9a-fA-F]{24}$/;
  constructor(@InjectModel(Products.name) private CustomersModel: Model<Products>) {}

 

  async findAll(): Promise<Products[]> {
    return this.CustomersModel.find().exec();
  }

  async create(createCatDto: ProductsDto , filename: string): Promise<Products> {
    createCatDto.filename = filename
    console.log('check data' , createCatDto);
    const createdCat = new this.CustomersModel(createCatDto);
    return createdCat.save();
  }
  
  async findOne(id: string): Promise<any> {
    if (id.match(this.Regexidmogo)) {
      return await this.CustomersModel.findById(id).exec();
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async delete(id: string , srcimgold?): Promise<any> {
   
    if (id.match(this.Regexidmogo)) {
      await this.CustomersModel.findByIdAndDelete(id);
      return null;
    } else {
      return HttpMessage.NOTDATA;
    }
  }
  async update(id: string , dataDTO :ProductsDto  , filename: string): Promise<any>{
    dataDTO.filename = filename
    console.log('check data' , dataDTO);
    if (id.match(this.Regexidmogo)) {
      return this.CustomersModel.findByIdAndUpdate(id, dataDTO)    
   }else {
     return HttpMessage.NOTDATA;
   }
  }
}
