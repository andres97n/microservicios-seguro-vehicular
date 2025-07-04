import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Deducible } from 'src/common/interfaces';

@Schema()
export class Cobertura extends Document {

  @ApiProperty({
    example: 'Libelula',
    description: 'Nombre de la empresa aseguradora',
    required: false,
  })
  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
    default: 'Libelula',
  })
  empCodigo: string;

  @ApiProperty({
    example: 'A',
    description: 'Estado de la cobertura, A: Activa, I: Inactiva',
    required: false,
    default: 'A',
  })
  @Prop({
    type: String,
    required: false,
    enum: ['A', 'I'],
    default: 'A',
  })
  estado: string;
  
  @ApiProperty({
    example: 'Robo por pérdidas Totales',
    description: 'Nombre de la cobertura',
    required: true,
  })
  @Prop({
    type: String,
    required: true
  })
  nombre: string;

  @ApiProperty({
    example: 'roboPerdidasTotales',
    description: 'Codigo core de la cobertura',
    required: true,
  })
  @Prop({
    required: true,
    trim: true,
    minlength: 5,
    index: true,
    unique: true,
  })
  codigoCore: string;

  @ApiProperty({
    required: true,
  })
  @Prop({
    type: String,
    required: true,
    minlength: 5,
  })
  productoCodigoCore: string;

  @ApiProperty({
    example: 'Robo por pérdidas Totales',
    description: 'Descripción de la cobertura',
    required: false,
  })
  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
  })
  descripcion: string;

  @ApiProperty({
    example: {
      "tipo" : "fijo",
      "valor" : 96
    },
    description: 'Valor del deducible de la cobertura',
    required: true,
  })
  @Prop({
    type: Object,
    required: true,
  })
  deducible: Deducible;
  
  @ApiProperty({
    example: true,
    description: 'Si es visible en el frontend',
    required: false,
    default: true,
  })
  @Prop({
    type: Boolean,
    required: false,
    default: true,
  })
    esVisible: boolean
  
  @ApiProperty({
    example: new Date(),
    description: 'Fecha de creación de la cobertura',
    required: false,
    default: new Date(),
  })
  @Prop({
    type: Date,
    required: false,
    default: new Date(),
  })
  fechaCreacion: Date;

  @ApiProperty({
    example: new Date(),
    description: 'Fecha de modificación de la cobertura',
    required: false,
    default: new Date(),
  })
  @Prop({
    type: Date,
    required: false,
    default: new Date(),
  })
  fechaModificacion: Date;

  @ApiProperty({
    required: false,
  })
  @Prop({
    type: Number,
    required: false,
  })
  cobPosicionDc: number
}

export const CoberturaSchema = SchemaFactory.createForClass( Cobertura ); 