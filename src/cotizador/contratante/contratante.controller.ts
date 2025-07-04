import { Controller, Get, Post, Body,Param, } from '@nestjs/common';
import { ContratanteService } from './contratante.service';
import { CreateContranteDto } from './dto/create-contratante.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contratantes')
@Controller('contratante')
export class ContratanteController {
  constructor(private readonly cotizadorService: ContratanteService) {}

  @Post()
  create(@Body() createCotizadorDto: CreateContranteDto) {
    return this.cotizadorService.create(createCotizadorDto);
  }

  @Get()
  findAll() {
    return this.cotizadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizadorService.findOne(+id);
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
