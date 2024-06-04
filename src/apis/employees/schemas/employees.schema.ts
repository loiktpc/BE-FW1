import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeesDocument = HydratedDocument<Employees>;

@Schema({ timestamps: true })
export class Employees {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  position: string;
  @Prop({ required: true })
  gender: string;
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees);
