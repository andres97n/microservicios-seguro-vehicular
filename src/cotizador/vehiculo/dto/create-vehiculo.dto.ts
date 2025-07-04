import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  placa: number;

  @IsString()
  marca: number;

  @IsString()
  modelo: number;

  @IsNumber()
  @IsPositive()
  @Min(4)
  anio: number;

  @IsString()
  uso: string;

  @IsString()
  provincia: string;

  @IsString()
  ciudad: string;
}
