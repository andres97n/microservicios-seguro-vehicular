import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { handleExceptions } from 'src/common/helpers/exceptions.helper';
import { Cobertura } from '../entities/cobertura.entity';
import { CreateCoberturaDto } from './dto/create-cobertura.dto';

@Injectable()
export class CoberturaService {

  constructor(
    @InjectModel( Cobertura.name ) 
    private readonly coberturaModel: Model<Cobertura>,
  ) {}

  async create(createCoberturaDto: CreateCoberturaDto) {
    // createCoberturaDto.name = createCoberturaDto.name.toLocaleLowerCase();

    try {
      const cobertura = await this.coberturaModel.create( createCoberturaDto );
      return cobertura;

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

//   update(id: number, updateCotizadorDto: UpdateCotizadorDto) {
//     return `This action updates a #${id} cotizador`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} cotizador`;
//   }
}
