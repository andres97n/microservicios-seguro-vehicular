import { PartialType } from '@nestjs/mapped-types';
import { CreateContranteDto } from './create-contratante.dto';

export class UpdateContranteDto extends PartialType(CreateContranteDto) {}
