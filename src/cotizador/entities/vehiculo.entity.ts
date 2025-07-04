import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

Schema();
export class Vehiculo extends Document {
  @Prop({
    type: String,
    required: false,
    trim: true,
    length: 7,
    unique: true,
  })
  placa: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  marca: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  modelo: string;

  @Prop({
    type: String,
    required: true,
  })
  anio: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
  })
  uso: string;

  @Prop({
    type: String,
    required: true,
  })
  provincia: string;

  @Prop({
    type: String,
    required: true,
  })
  ciudad: string;

  @Prop({
    type: Number,
    required: true,
  })
  precio: number;
  
}

export const VehiculoSchema = SchemaFactory.createForClass( Vehiculo );