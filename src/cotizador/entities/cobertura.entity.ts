import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Deducible } from 'src/common/interfaces';

@Schema()
export class Cobertura extends Document {
  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
    default: 'Libelula',
  })
  empCodigo: string;

  @Prop({
    type: String,
    required: false,
    enum: ['A', 'I'],
    default: 'A',
  })
  estado: string;
  
  @Prop({
    type: String,
    required: true
  })
  nombre: string;

  @Prop({
    required: true,
    trim: true,
    minlength: 5,
    index: true,
    unique: true,
  })
  codigoCore: string;

  @Prop({
    type: String,
    required: true,
    minlength: 5,
  })
  productoCodigoCore: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
  })
  descripcion: string;

  @Prop({
    type: Object,
    required: true,
  })
  deducible: Deducible;
  
  @Prop({
    type: Boolean,
    required: false,
    default: true,
  })
    esVisible: boolean
  
  @Prop({
    type: Date,
    required: false,
    default: new Date(),
  })
  fechaCreacion: Date;

  @Prop({
    type: Date,
    required: false,
    default: new Date(),
  })
  fechaModificacion: Date;

  @Prop({
    type: Number,
    required: false,
  })
  cobPosicionDc: number
}

export const CoberturaSchema = SchemaFactory.createForClass( Cobertura ); 