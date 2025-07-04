import { CreateContranteDto } from "src/cotizador/contratante/dto/create-contratante.dto";
import { CreateCotizadorDto } from "src/cotizador/cotizador/dto/create-cotizador.dto";
import { CreateVehiculoDto } from "src/cotizador/vehiculo/dto/create-vehiculo.dto";


export const getDtoContratante = (cotizadorDto: CreateCotizadorDto): CreateContranteDto => {
  return {
    typeIdentification: cotizadorDto.typeIdentification,
    identificationNumber: cotizadorDto.identificationNumber,
    gender: cotizadorDto.gender,
    civilStatus: cotizadorDto.civilStatus,
    birthDate: cotizadorDto.birthDate,
  };
}


export const getDtoVehiculo = (cotizadorDto: CreateCotizadorDto): CreateVehiculoDto => {
  return {
    marca: cotizadorDto.brand,
    modelo: cotizadorDto.model,
    anio: cotizadorDto.year,
    provincia: cotizadorDto.province,
    ciudad: cotizadorDto.city,
    precio: cotizadorDto.price,
    placa: '',
    uso: '',
  };
}

export const getDtoCotizador = (cotizadorDto: CreateCotizadorDto) => {

    // const contratante = getDtoContratante(cotizadorDto);
    // const vehiculo = getDtoVehiculo(cotizadorDto);

  return {
    contratante: {
        birthDate: cotizadorDto.birthDate.toISOString(),
        civilStatus: cotizadorDto.civilStatus,
        gender: cotizadorDto.gender,
        identificationNumber: cotizadorDto.identificationNumber,
        typeIdentification: cotizadorDto.typeIdentification,
    },
    vehiculo: {
        marca: cotizadorDto.brand,
        modelo: cotizadorDto.model,
        anio: cotizadorDto.year,
        provincia: cotizadorDto.province,
        ciudad: cotizadorDto.city,
        precio: cotizadorDto.price,
        placa: '',
        uso: '',
    },  
    estado: 'A',
    fechaCreacion: new Date(),
    empCodigo: 'Libelula',
  };
}