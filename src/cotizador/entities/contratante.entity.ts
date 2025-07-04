import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contratante extends Document {
  @Prop({
    type: String,
    required: true,
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
    required: true,
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
    enum: ['Cedula', 'Pasaporte', 'RUC'],
  })
  tipoIdentificacion: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    index: true,
    unique: true,
  })
  numeroIdentificacion: string;

  @Prop({
    type: Date,
    required: true,
  })
  fechaNacimiento: Date;
  
  @Prop({
    type: String,
    required: true,
    enum: ['Masculino', 'Femenino']
  })
    genero: string
  
  @Prop({
    type: String,
    required: true,
    enum: ['Soltero', 'Casado', 'Divorciado']
  })
  estadoCivil: string;
}

export const ContratanteSchema = SchemaFactory.createForClass( Contratante ); 