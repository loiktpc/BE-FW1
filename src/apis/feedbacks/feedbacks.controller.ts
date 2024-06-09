import { HttpMessage } from './../../global/globalEnum';
import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksrDto } from './dto/feedbacks.dto';
import { ResPonsData } from 'src/global/globalClass';
import { IFeedback } from './interfaces/feedbacks.interfaces';
import { AuthGuard } from 'src/auth/guards/authorization.guard';


@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly FeedbacksService: FeedbacksService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Query('page') page: string ,@Query('numberofProduct') numberofProduct : string): Promise<ResPonsData<IFeedback[]>> {
    try {
      
      return new ResPonsData<IFeedback[]>(
        await this.FeedbacksService.findAll(page , numberofProduct),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IFeedback[]>(
        await this.FeedbacksService.findAll(page , numberofProduct),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createCatDto: FeedbacksrDto,
  ): Promise<ResPonsData<FeedbacksrDto>> {
    try {
      return new ResPonsData<FeedbacksrDto>(
        await this.FeedbacksService.create(createCatDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<FeedbacksrDto>(
        await this.FeedbacksService.create(createCatDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<ResPonsData<IFeedback>> {
    try {
      return new ResPonsData<IFeedback>(
        await this.FeedbacksService.findOne(id),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IFeedback>(
        await this.FeedbacksService.findOne(id),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResPonsData<IFeedback>> {
   try {
    return new ResPonsData<IFeedback>(
      await this.FeedbacksService.delete(id),
      HttpStatus.OK,
      HttpMessage.SUCCESS,
    );
   } catch (error) {
    return new ResPonsData<IFeedback>(
      await this.FeedbacksService.delete(id),
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpMessage.ERROR,
    );
   }
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFeedbacksrDto: FeedbacksrDto): Promise<ResPonsData<IFeedback>>{
    try {
      return new ResPonsData<IFeedback>(
        await this.FeedbacksService.update(id , updateFeedbacksrDto),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResPonsData<IFeedback>(
        await this.FeedbacksService.update(id , updateFeedbacksrDto),
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
