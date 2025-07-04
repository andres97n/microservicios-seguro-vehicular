import { Module } from '@nestjs/common';
import { CotizadorService } from './cotizador.service';
import { CotizadorController } from './cotizador.controller';

@Module({
  controllers: [CotizadorController],
  providers: [CotizadorService],
  imports: [],
})
export class CotizadorModule {}
