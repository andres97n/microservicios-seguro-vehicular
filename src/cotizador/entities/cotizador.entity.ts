import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Contratante } from './contratante.entity';
import { Vehiculo } from './vehiculo.entity';


@Schema()
export class Cotizador extends Document {
  @Prop({
    type: Contratante,
    required: true,
  })
  contratante: Contratante;

  @Prop({
    type: Vehiculo,
    required: true,
  })
  vehiculo: Vehiculo;

  @Prop({
    type: Boolean,
    default: true,
  })
  estado: boolean;

  @Prop({
    type: Date,
    required: true,
    trim: true,
  })
  fechaCreacion: Date;
}

export const CotizadorSchema = SchemaFactory.createForClass(Cotizador);