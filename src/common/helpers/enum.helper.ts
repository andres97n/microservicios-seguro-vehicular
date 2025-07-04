import { GeneroEnum } from "../enums/genero.enum";


export const getGeneroEnum = () => {
  return {
    MASCULINO: 'Masculino',
    FEMENINO: 'Femenino',
  };
}

export const enumToArray = (enumObject: any) => {
  return Object.values(enumObject).filter(value => typeof value !== 'number' || isNaN(Number(value)));
} 