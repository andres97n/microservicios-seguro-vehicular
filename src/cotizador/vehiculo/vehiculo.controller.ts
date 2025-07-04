import { Controller, Get, Post, Body,Param, } from '@nestjs/common';

import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {    
    return this.vehiculoService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculoService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCotizadorDto: UpdateContranteDto) {
  //   return this.cotizadorService.update(+id, updateCotizadorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cotizadorService.remove(+id);
  // }
}
