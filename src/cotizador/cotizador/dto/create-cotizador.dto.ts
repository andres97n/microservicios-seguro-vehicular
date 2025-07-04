import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCotizadorDto {
 

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
    const [year, month, day] = value.split('-');
    return new Date(+year, +month - 1, +day);
  })
  @IsDate({ message: 'fechaNacimiento debe ser una fecha válida' })
  birthDate: Date;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  @IsOptional()
  estado: string;

  @IsString()
  year: string;

  @IsString()
  province: string;

  @IsString()
  city: string; 

  @IsNumber()
  price: number;

  @Transform(({ value }) => {
      if (typeof value !== 'string') return value;
      const [day, month, year] = value.split('/');
      return new Date(+year, +month - 1, +day);
    })
  @IsDate({message: 'fechaCreacion debe ser una fecha válida'})
  @IsOptional()
  fechaCreacion?: Date;

}
