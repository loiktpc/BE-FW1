import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes , Types} from 'mongoose';
import { Customers } from 'src/apis/customers/schemas/customers.schema';
import { Products } from 'src/apis/products/schemas/producsts.schema';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema({ timestamps: true })
export class Orders {
  @Prop({ required: true })
  quantity: string;
  @Prop({ required: true })
  status: string;
  @Prop({ type: SchemaTypes.ObjectId, ref: Customers.name })
  customers: Types.ObjectId;
  @Prop({ type: SchemaTypes.ObjectId, ref: Products.name })
  products: Types.ObjectId;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
