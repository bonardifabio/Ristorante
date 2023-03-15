import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() Order) {
    return this.ordersService.create(Order);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':tableNumber')
  findOne(@Param('tableNumber') tableNumber: string) {
    return this.ordersService.findTableNumber(tableNumber);
  }

  @Get('futureOrders/tableNumber/:tableNumber')
  findOneFuture(@Param('tableNumber') tableNumber: string) {
    return this.ordersService.findTableNumberFuture(tableNumber);
  }
}
