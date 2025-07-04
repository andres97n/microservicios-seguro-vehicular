import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculo, VehiculoSchema } from '../entities/vehiculo.entity';



@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema,
      },
    ])
  ],
})
export class VehiculoModule {}
