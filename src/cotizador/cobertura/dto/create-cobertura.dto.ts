import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Deducible } from 'src/common/interfaces';


export class CreateCoberturaDto {
  @IsString()
  @IsOptional()
  empCodigo?: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsString()
  nombre: string;

  @IsString()
  codigoCore: string;

  @IsString()
  productoCodigoCore: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsObject()
  deducible: Deducible;

  @IsBoolean()
  @IsOptional()
  esVisible?: boolean;

  @Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const [day, month, year] = value.split('/');
    return new Date(+year, +month - 1, +day);
  })
  @IsDate({message: 'fechaNacimiento debe ser una fecha válida'})
  @IsOptional()
  fechaModificacion?: Date;

  @IsNumber()
  cobPosicionDc: number;

}
