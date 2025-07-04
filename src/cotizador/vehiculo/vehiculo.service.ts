import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { handleExceptions } from 'src/common/helpers/exceptions.helper';
import { Vehiculo } from '../entities/vehiculo.entity';
// import { CreateContranteDto } from './dto/create-contratante.dto';

@Injectable()
export class VehiculoService {

  constructor(
    @InjectModel( Vehiculo.name ) 
    private readonly vehiculoModel: Model<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto) {
    try {
      console.log('createVehiculoDto', createVehiculoDto);
      
      const vehiculo = await this.vehiculoModel.create( createVehiculoDto );
      return {
        message: 'Vehículo creado exitosamente',
        ok: true,
        data: vehiculo,
      };
      
    } catch (error) {
      handleExceptions( error );
    }

  }

  findAll() {
    return this.vehiculoModel.find();
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
