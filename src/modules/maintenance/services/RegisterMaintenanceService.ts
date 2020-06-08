import { Manutencao } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IMaintenanceRepository from '../repositories/IMaintenanceRepository';

interface IRequestDTO {
  description: string;
  utilityCounter: number;
}

@injectable()
export default class RegisterMaintenanceService {
  constructor(
    @inject('MaintenanceRepository')
    private maintenanceRepository: IMaintenanceRepository,
  ) {}

  public async execute({
    description,
    utilityCounter,
  }: IRequestDTO): Promise<Manutencao> {
    const maintenance = await this.maintenanceRepository.create(
      description,
      utilityCounter,
    );

    return maintenance;
  }
}
