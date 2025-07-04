import { Injectable } from '@nestjs/common';
// import { CreateCotizadorDto } from './dto/create-cotizador.dto';
// import { UpdateCotizadorDto } from './dto/update-cotizador.dto';

@Injectable()
export class CotizadorService {
  // create(createCotizadorDto: CreateCotizadorDto) {
  //   return 'This action adds a new cotizador';
  // }

  findAll() {
    return `This action returns all cotizador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotizador`;
  }

  // update(id: number, updateCotizadorDto: UpdateCotizadorDto) {
  //   return `This action updates a #${id} cotizador`;
  // }

  remove(id: number) {
    return `This action removes a #${id} cotizador`;
  }
}
