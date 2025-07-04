import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateContranteDto } from './dto/create-contratante.dto';
import { Contratante } from '../entities/contratante.entity';
import { handleExceptions } from 'src/common/helpers/exceptions.helper';
// import { CreateContranteDto } from './dto/create-contratante.dto';

@Injectable()
export class ContratanteService {

  constructor(
    @InjectModel( Contratante.name ) 
    private readonly contratanteModel: Model<Contratante>,
  ) {}

  async create(createContranteDto: CreateContranteDto) {
    // createContranteDto.name = createContranteDto.name.toLocaleLowerCase();

    try {
      const contratante = await this.contratanteModel.create( createContranteDto );
      return contratante;
      
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
