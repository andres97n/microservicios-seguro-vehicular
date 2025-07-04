import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Cotizador extends Document {
  @Prop({
    type: Object,
    required: true,
  })
  contratante: object;

  @Prop({
    type: Object,
    required: true,
  })
  vehiculo: object;

  @Prop({
    type: String,
    required: false,
    default: 'A',
    enum: ['A', 'I'],
  })
  estado: string;

  @Prop({
    type: Date,
    required: false,
    trim: true,
    default: () => new Date(),
  })
  fechaCreacion: Date;

  @Prop({
    type: String,
    required: false,
    trim: true,
    default: 'Libelula',
  })
  empCodigo: string;

}

export const CotizadorSchema = SchemaFactory.createForClass(Cotizador);