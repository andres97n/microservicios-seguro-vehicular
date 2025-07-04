import { IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsOptional()
  placa: string;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  anio: string;

  @IsString()
  @IsOptional()
  uso: string;

  @IsString()
  provincia: string;

  @IsString()
  ciudad: string;

  @IsNumber()
  @IsPositive()
  precio: number;
}
