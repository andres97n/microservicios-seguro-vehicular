import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Cobertura, CoberturaSchema } from '../entities/cobertura.entity';
import { CoberturaService } from './cobertura.service';
import { CoberturaController } from './cobertura.controller';


@Module({
  controllers: [CoberturaController],
  providers: [CoberturaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Cobertura.name,
        schema: CoberturaSchema.set('toJSON', {
          transform: (_, ret) => { delete ret.__v; return ret; }
        }),
      },
    ])
  ],
})
export class ContratanteModule {}
