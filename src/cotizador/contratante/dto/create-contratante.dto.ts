import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateContranteDto {
  // @IsString()
  // @IsOptional()
  // primerNombre?: string;

  // @IsString()
  // @IsOptional()
  // segundoNombre?: string;

  // @IsString()
  // @IsOptional()
  // primerApellido?: string;

  // @IsString()
  // @IsOptional()
  // segundoApellido?: string;

  @IsString()
  typeIdentification: string;

  @IsString()
  identificationNumber: string;

  @IsString()
  gender: string;

  @IsString()
  civilStatus: string;

  @Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const [day, month, year] = value.split('/');
    return new Date(+year, +month - 1, +day);
  })
  @IsDate({ message: 'fechaNacimiento debe ser una fecha válida' })
  birthDate: Date;
}
