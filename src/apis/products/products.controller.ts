import {
  Bind,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { IProducts } from './interfaces/products.interface';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';
import { ResPonsData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
var appRoot = require("app-root-path");
import path = require('path');
import { v4 as uuidv4 } from 'uuid';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async findAll(@Query('q') q: string ): Promise<ResPonsData<IProducts[]>> {
    try {
      return new ResPonsData(
        await this.productsService.findAll(q),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.productsService.findAll(q),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage : diskStorage({
      destination: function (req, file, cb) {
        cb(null, appRoot + "/src/uploads/");
      },
      filename: (req, file, cb) => {
        // const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        // const extension: string = path.parse(file.originalname).ext;

        cb(null,   file.originalname)
    }
    })
  }))
  async create(
    @Body() createProductsDto: ProductsDto,
    @UploadedFile() file: Express.Multer.File): Promise<ResPonsData<IProducts>> {
    try {
      console.log('check file', file.filename);
      
      return new ResPonsData(
        await this.productsService.create(createProductsDto , file.filename),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.productsService.create(createProductsDto  , file.filename),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPonsData<IProducts>> {
    try {
      return new ResPonsData<IProducts>(
        await this.productsService.findOne(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IProducts>(
        await this.productsService.findOne(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResPonsData<IProducts>> {
    try {
      return new ResPonsData<IProducts>(
        await this.productsService.delete(id ),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IProducts>(
        await this.productsService.delete(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put(':id')
  @UseInterceptors(FileInterceptor('file', {
    storage : diskStorage({
      destination: function (req, file, cb) {
        cb(null, appRoot + "/src/uploads/");
      },
      filename: (req, file, cb) => {
        // const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        // const extension: string = path.parse(file.originalname).ext;
        // `${filename}${extension}`
        cb(null, file.originalname)
    }
    })
  }))
  async update(
    @Param('id') id: string,
    @Body() updateProductsDto: ProductsDto,
    @UploadedFile() file: Express.Multer.File
  ): Promise<ResPonsData<IProducts>> {
    try {
      console.log('check file', file.filename);
      return new ResPonsData<IProducts>(
        await this.productsService.update(id, updateProductsDto , file.filename),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IProducts>(
        await this.productsService.update(id, updateProductsDto ,  file.filename),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
