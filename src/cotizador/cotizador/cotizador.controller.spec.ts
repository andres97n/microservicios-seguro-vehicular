import { Test, TestingModule } from '@nestjs/testing';
import { CotizadorController } from './cotizador.controller';
import { CotizadorService } from './cotizador.service';

describe('CotizadorController', () => {
  let controller: CotizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizadorController],
      providers: [CotizadorService],
    }).compile();

    controller = module.get<CotizadorController>(CotizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
