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
import { StaffsService } from './staffs.service';
import { StaffsDto } from './dto/staffs.dto';
import { ResPonsData } from 'src/global/globalClass';
import { Istaffs } from './interfaces/staffs.interface';
import { HttpMessage } from 'src/global/globalEnum';

@Controller('staffs')
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}
  @Get()
  async findAll(): Promise<ResPonsData<Istaffs[]>> {
    try {
      return new ResPonsData(
        await this.staffsService.findAll(),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.staffsService.findAll(),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  async create(
    @Body() createStaffsDto: StaffsDto,
  ): Promise<ResPonsData<Istaffs>> {
    try {
      return new ResPonsData(
        await this.staffsService.create(createStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData(
        await this.staffsService.create(createStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResPonsData<Istaffs>> {
    try {
      return new ResPonsData<Istaffs>(
        await this.staffsService.findOne(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<Istaffs>(
        await this.staffsService.findOne(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResPonsData<Istaffs>> {
    try {
      return new ResPonsData<Istaffs>(
        await this.staffsService.delete(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<Istaffs>(
        await this.staffsService.delete(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStaffsDto: StaffsDto,
  ): Promise<ResPonsData<Istaffs>> {
    try {
      return new ResPonsData<Istaffs>(
        await this.staffsService.update(id, updateStaffsDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<Istaffs>(
        await this.staffsService.update(id, updateStaffsDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
