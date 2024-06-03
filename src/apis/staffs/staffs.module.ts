import { Module } from '@nestjs/common';
import { StaffsController } from './staffs.controller';
import { StaffsService } from './staffs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Staffs, StaffsSchema } from './schemas/staffs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Staffs.name, schema: StaffsSchema }])],
  controllers: [StaffsController],
  providers: [StaffsService]
})
export class StaffsModule {}
