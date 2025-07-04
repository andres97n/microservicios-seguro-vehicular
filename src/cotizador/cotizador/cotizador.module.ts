import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CotizadorService } from './cotizador.service';
import { CotizadorController } from './cotizador.controller';
import { Cotizador, CotizadorSchema } from '../entities/cotizador.entity';
import { Vehiculo, VehiculoSchema } from '../entities/vehiculo.entity';
import { Contratante, ContratanteSchema } from '../entities/contratante.entity';


@Module({
  controllers: [CotizadorController],
  providers: [CotizadorService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Cotizador.name,
        schema: CotizadorSchema.set('toJSON', {
          transform: (_, ret) => { delete ret.__v; return ret; }
        }),
      },
    ]),

    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema.set('toJSON', {
          transform: (_, ret) => { delete ret.__v; return ret; }
        }),
      },
    ]),

    MongooseModule.forFeature([
      {
        name: Contratante.name,
        schema: ContratanteSchema.set('toJSON', {
          transform: (_, ret) => { delete ret.__v; return ret; }
        }),
      },
    ])
  ],
})
export class CotizadorModule {}
