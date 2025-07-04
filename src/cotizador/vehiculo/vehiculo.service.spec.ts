import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { Vehiculo } from '../entities/vehiculo.entity';

// Helper to create a mock Model
const mockVehiculoModel = () => ({
  create: jest.fn(),
  find: jest.fn(),
});

type MockVehiculoModel = Partial<Record<keyof Model<Vehiculo>, jest.Mock>>;

describe('VehiculoService', () => {
  let service: VehiculoService;
  let vehiculoModel: MockVehiculoModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehiculoService,
        {
          provide: getModelToken(Vehiculo.name),
          useFactory: mockVehiculoModel,
        },
      ],
    }).compile();

    service = module.get<VehiculoService>(VehiculoService);
    vehiculoModel = module.get<MockVehiculoModel>(getModelToken(Vehiculo.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a vehiculo and return response object', async () => {
      // Arrange
      const dto: CreateVehiculoDto = {
        placa: 'ABC123',
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: '2021',
        uso: 'particular',
        provincia: 'Pichincha',
        ciudad: 'Quito',
        precio: 15000,
      };
      const createdVehiculo = { _id: '1', ...dto };
      if (vehiculoModel?.create) vehiculoModel.create.mockResolvedValue(createdVehiculo);

      // Act
      const result = await service.create(dto);

      // Assert
      expect(vehiculoModel.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual({
        message: 'Vehículo creado exitosamente',
        ok: true,
        data: createdVehiculo,
      });
    });

    it('should throw an exception on error', async () => {
      // Arrange
      const dto: CreateVehiculoDto = {
        placa: 'XYZ789',
        marca: 'Honda',
        modelo: 'Civic',
        anio: '2020',
        uso: 'comercial',
        provincia: 'Guayas',
        ciudad: 'Guayaquil',
        precio: 18000,
      };
      const error = new Error('Create failed');
      if (vehiculoModel?.create) vehiculoModel.create.mockRejectedValue(error);

      // Act & Assert
      await expect(service.create(dto)).rejects.toThrow(error);
    });
  });

  describe('findAll', () => {
    it('should return an array of vehiculos', async () => {
      // Arrange
      const vehiculosList = [{ _id: '1', marca: 'Ford' }];
      if (vehiculoModel?.find) vehiculoModel.find.mockReturnValue({ exec: () => Promise.resolve(vehiculosList) });

      // Act
      const result = await service.findAll();

      // Assert
      expect(vehiculoModel.find).toHaveBeenCalled();
      expect(result).toBeInstanceOf(Promise);
      await expect(result).resolves.toEqual(vehiculosList);
    });
  });
});
