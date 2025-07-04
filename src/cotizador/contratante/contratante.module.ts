import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// import { CotizadorService } from '../cotizador.service';
// import { CotizadorController } from '../cotizador.controller';
import { Contratante, ContratanteSchema } from '../entities/contratante.entity';
import { ContratanteController } from './contratante.controller';
import { ContratanteService } from './contratante.service';

@Module({
  controllers: [ContratanteController],
  providers: [ContratanteService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Contratante.name,
        schema: ContratanteSchema,
      },
    ])
  ],
})
export class ContratanteModule {}
