import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
import { Dish, DishDocument } from '../schemas/dish.schema';

@Injectable()
export class DishesService {
  constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>) {}
  async findAll(): Promise<Dish[]> {
    return this.dishModel.find().exec();
  }
}
