import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Contratante extends Document {
  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
  })
  primerNombre: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
  })
  segundoNombre: string;
  
  @Prop({
    type: String,
    required: false,
    trim: true,
    minlength: 5,
  })
  primerApellido: string;

  @Prop({
    required: false,
    trim: true,
    minlength: 5,
  })
  segundoApellido: string;

  @Prop({
    type: String,
    required: true,
    // enum: ['Cedula', 'Pasaporte', 'RUC'],
  })
  typeIdentification: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
     minlength: 5,
      index: { unique: true, sparse: true },
    // unique: true,
  })
  identificationNumber: string;

  @Prop({
    type: Date,
    required: true,
  })
  birthDate: Date;
  
  @Prop({
    type: String,
    required: true,
    // enum: ['Masculino', 'Femenino']
  })
  gender: string;

  @Prop({
    type: String,
    required: true,
    // enum: ['Soltero', 'Casado', 'Divorciado']
  })
  civilStatus: string;
}

export const ContratanteSchema = SchemaFactory.createForClass( Contratante ); 