import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from './schemas/producsts.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Products.name, schema: ProductsSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
