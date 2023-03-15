import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  dishes: any[];

  @Prop()
  tableNumber: number;

  @Prop()
  orderTotalPrice: number;

  @Prop()
  creationDate: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);