import { Transform } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

import { CreateContranteDto } from 'src/cotizador/contratante/dto/create-contratante.dto';
import { CreateVehiculoDto } from 'src/cotizador/vehiculo/dto/create-vehiculo.dto';

export class CreateCotizadorDto {
 
  contratante: CreateContranteDto;

  vehiculo: CreateVehiculoDto;

  @IsString()
  estado: string;

  @Transform(({ value }) => {
      if (typeof value !== 'string') return value;
      const [day, month, year] = value.split('/');
      return new Date(+year, +month - 1, +day);
    })
    @IsDate({message: 'fechaCreacion debe ser una fecha válida'})
  fechaCreacion: Date;

}
