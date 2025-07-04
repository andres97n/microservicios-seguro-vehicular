import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateContranteDto {
  @IsString()
  primerNombre: string;

  @IsString()
  @IsOptional()
  segundoNombre?: string;

  @IsString()
  primerApellido: string;

  @IsString()
  @IsOptional()
  segundoApellido?: string;

  @IsString()
  tipoIdentificacion: string;

  @IsString()
  numeroIdentificacion: string;

  @Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const [day, month, year] = value.split('/');
    return new Date(+year, +month - 1, +day);
  })
  @IsDate({message: 'fechaNacimiento debe ser una fecha válida'})
  fechaNacimiento: Date;

  @IsString()
  genero: string;

  @IsString()
  estadoCivil: string;
}
