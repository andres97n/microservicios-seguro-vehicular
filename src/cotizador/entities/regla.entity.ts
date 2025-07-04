import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Deducible } from 'src/common/interfaces';

@Schema()
export class Regla extends Document {
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
  agrupCodigoCore: string;

  @Prop({
    required: true,
    trim: true,
    minlength: 5,
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
  })
  descripcion: string;

  @Prop({
    type: Object,
    required: true,
  })
  tipo: Deducible;
  
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
  variables: Array<string>;

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

// export const CoberturaSchema = SchemaFactory.createForClass( Cobertura ); 