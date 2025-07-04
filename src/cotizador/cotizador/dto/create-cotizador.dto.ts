import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCotizadorDto {
 

  @ApiProperty({
    example: 'Cédula',
    description: 'Tipo de identificación del contratante',
    required: true,
  })
  @IsString()
  typeIdentification: string;

  @ApiProperty({
    example: '0983234567',
    description: 'Número de identificación del contratante',
    required: true,
  })
  @IsString()
  identificationNumber: string;

  @ApiProperty({
    example: 'M',
    description: 'Género del contratante',
    required: true,
  })
  @IsString()
  gender: string;

  @ApiProperty({
    example: 'S',
    description: 'Estado civil del contratante',
    required: true,
  })
  @IsString()
  civilStatus: string;

  @ApiProperty({
    example: '2007-07-02',
    description: 'Fecha de nacimiento del contratante',
    required: true,
  })
  @Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const [year, month, day] = value.split('-');
    return new Date(+year, +month - 1, +day);
  })
  @IsDate({ message: 'fechaNacimiento debe ser una fecha válida' })
  birthDate: Date;

  @ApiProperty({
    example: 'Chevrolet',
    description: 'Marca del vehículo',
    required: true,
  })
  @IsString()
  brand: string;

  @ApiProperty({
    example: 'Aveo',
    description: 'Modelo del vehículo',
    required: true,
  })
  @IsString()
  model: string;

  @ApiProperty({
    example: 'A',
    description: 'Estado del cotizador',
    required: true,
  })
  @IsString()
  @IsOptional()
  estado: string;

  @ApiProperty({
    example: '2023',
    description: 'Año del vehículo',
    required: true,
  })
  @IsString()
  year: string;

  @ApiProperty({
    example: 'Azuay',
    description: 'Provincia del vehículo',
    required: true,
  })
  @IsString()
  province: string;

  @ApiProperty({
    example: 'Cuenca',
    description: 'Ciudad del vehículo',
    required: true,
  })
  @IsString()
  city: string; 

  @ApiProperty({
    example: 10000,
    description: 'Precio del vehículo',
    required: true,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: new Date(),
    description: 'Fecha de creación del cotizador',
    required: true,
  })
  @Transform(({ value }) => {
      if (typeof value !== 'string') return value;
      const [day, month, year] = value.split('/');
      return new Date(+year, +month - 1, +day);
    })
  @IsDate({message: 'fechaCreacion debe ser una fecha válida'})
  @IsOptional()
  fechaCreacion?: Date;

}
