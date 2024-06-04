import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema({ timestamps: true })
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  describes: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  quantity: string;

  @Prop({ required: true })
  brand: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
