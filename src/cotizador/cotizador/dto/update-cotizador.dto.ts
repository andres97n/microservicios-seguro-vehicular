import { PartialType } from '@nestjs/mapped-types';

import { CreateCotizadorDto } from './create-cotizador.dto';

export class UpdateCotizadorDto extends PartialType(CreateCotizadorDto) {}
