import { Manutencao } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IMaintenanceRepository from '../repositories/IMaintenanceRepository';

@injectable()
export default class ListMaintenancesService {
  constructor(
    @inject('MaintenanceRepository')
    private maintenanceRepository: IMaintenanceRepository,
  ) {}

  public async execute(): Promise<Manutencao[]> {
    const maintenances = await this.maintenanceRepository.getAll();

    return maintenances;
  }
}
