import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Cotizador } from '../entities/cotizador.entity';
import { CreateCotizadorDto } from './dto/create-cotizador.dto';
import { handleExceptions } from 'src/common/helpers/';
import { UpdateCotizadorDto } from './dto/update-cotizador.dto';
import { getDtoContratante, getDtoCotizador, getDtoVehiculo } from 'src/common/helpers/dto.helper';
import { Vehiculo } from '../entities/vehiculo.entity';
import { Contratante } from '../entities/contratante.entity';


@Injectable()
export class CotizadorService {

  constructor(
    @InjectModel( Cotizador.name ) 
    private readonly cotizadorModel: Model<Cotizador>,
    
    @InjectModel( Vehiculo.name ) 
    private readonly vehiculoModel: Model<Vehiculo>,

    @InjectModel( Contratante.name ) 
    private readonly contratanteModel: Model<Contratante>,
  ) {}

  async create(createCotizadorDto: CreateCotizadorDto) {
    try {
      const contratante = await this.contratanteModel.create( getDtoContratante(createCotizadorDto) );
      console.log(getDtoContratante(createCotizadorDto) );
      
      const vehiculo = await this.vehiculoModel.create( getDtoVehiculo(createCotizadorDto) );

      if (!contratante) throw new BadRequestException('Error al crear el contratante o el vehiculo');

      if (!vehiculo) throw new BadRequestException('Error al crear el vehiculo');
      console.log(getDtoCotizador(createCotizadorDto) );  
      
      const cotizador = await this.cotizadorModel.create( getDtoCotizador(createCotizadorDto) );
      return {
        ...cotizador.toJSON(),
        ...vehiculo.toJSON(),
        ...contratante.toJSON() 
      };

    } catch (error) {
      handleExceptions( error );
    }
  }

  findAll() {
    return this.cotizadorModel.find();
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
