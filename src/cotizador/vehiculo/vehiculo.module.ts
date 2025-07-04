import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Vehiculo, VehiculoSchema } from '../entities/vehiculo.entity';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoService } from './vehiculo.service';



@Module({
  controllers: [VehiculoController],
  providers: [VehiculoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema
      },
    ])
  ],
})
export class VehiculoModule {}
