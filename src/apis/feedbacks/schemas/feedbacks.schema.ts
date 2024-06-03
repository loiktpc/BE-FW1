import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FeedbacksDocument = HydratedDocument<Feedback>;

@Schema()
export class Feedback {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  star: number;


}

export const FeedbacksSchema = SchemaFactory.createForClass(Feedback);