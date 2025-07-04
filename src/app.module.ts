import { Module } from '@nestjs/common';  
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { ContratanteModule } from './cotizador/contratante/contratante.module';
import { VehiculoModule } from './cotizador/vehiculo/vehiculo.module';
import { CotizadorModule } from './cotizador/cotizador/cotizador.module';


dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI ?? ''),
    
    ContratanteModule,
    VehiculoModule,
    CotizadorModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
