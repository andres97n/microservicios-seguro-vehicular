import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Cotizador } from '../entities/cotizador.entity';
import { CreateCotizadorDto } from './dto/create-cotizador.dto';
import { handleExceptions } from 'src/common/helpers/exceptions.helper';
import { UpdateCotizadorDto } from './dto/update-cotizador.dto';


@Injectable()
export class CotizadorService {

  constructor(
    @InjectModel( Cotizador.name ) 
    private readonly contratanteModel: Model<Cotizador>,  
  ) {}

  async create(createCotizadorDto: CreateCotizadorDto) {
    try {
      const cotizador = await this.contratanteModel.create( createCotizadorDto );
      return cotizador;

    } catch (error) {
      handleExceptions( error );
    }
  }

  findAll() {
    return `This action returns all cotizador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotizador`;
  }

  update(id: number, updateCotizadorDto: UpdateCotizadorDto) {
    return `This action updates a #${id} cotizador`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizador`;
  }
}
