import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizadorService } from './cotizador.service';

@Controller('cotizador')
export class CotizadorController {
  constructor(private readonly cotizadorService: CotizadorService) {}

  // @Post()
  // create(@Body() createCotizadorDto: CreateCotizadorDto) {
  //   return this.cotizadorService.create(createCotizadorDto);
  // }

  @Get()
  findAll() {
    return this.cotizadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizadorService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCotizadorDto: UpdateCotizadorDto) {
  //   return this.cotizadorService.update(+id, updateCotizadorDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotizadorService.remove(+id);
  }
}
