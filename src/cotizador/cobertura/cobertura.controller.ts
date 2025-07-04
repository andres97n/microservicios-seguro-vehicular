import { Controller, Get, Post, Body,Param, } from '@nestjs/common';
import { CoberturaService } from './cobertura.service';
import { CreateCoberturaDto } from './dto/create-cobertura.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Coberturas')
@Controller('cobertura')
export class CoberturaController {
  constructor(private readonly coberturaService: CoberturaService) {}

  @Post()
  create(@Body() createCotizadorDto: CreateCoberturaDto) {
    return this.coberturaService.create(createCotizadorDto);
  }

  @Get()
  findAll() {
    return this.coberturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coberturaService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCotizadorDto: UpdateContranteDto) {
  //   return this.coberturaService.update(+id, updateCotizadorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coberturaService.remove(+id);
  // }
}
