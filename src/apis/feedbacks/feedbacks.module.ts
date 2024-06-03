import { Feedback , FeedbacksSchema } from './schemas/feedbacks.schema';
import { FeedbacksService } from './feedbacks.service';
import { Module } from '@nestjs/common';
import { FeedbacksController } from './feedbacks.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Feedback.name, schema: FeedbacksSchema }])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}