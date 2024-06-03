import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StaffsDocument = HydratedDocument<Staffs>;

@Schema({ timestamps: true })
export class Staffs {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  trainers: string;

  @Prop()
  note: string;

  
}

export const StaffsSchema = SchemaFactory.createForClass(Staffs);