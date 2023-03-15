import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [DishesModule,MongooseModule.forRoot('mongodb://localhost/Ristorante'), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
