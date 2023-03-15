import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import { Order, OrderDocument } from '../schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}
  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }
  async findTableNumber(tableNumber): Promise<Order[]> {
    return this.orderModel.find({tableNumber:tableNumber})
  }
  async findTableNumberFuture(tableNumber): Promise<Order[]> {
    return this.orderModel.find({tableNumber:tableNumber, creationDate: { $gt: Date.now() } })
  }
  async create(Order): Promise<Order> {
    const createdOrder = new this.orderModel(Order);
    return createdOrder.save();
  }
}
