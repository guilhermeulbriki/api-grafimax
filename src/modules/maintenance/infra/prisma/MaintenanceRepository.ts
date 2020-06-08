import { Manutencao, PrismaClient } from '@prisma/client';
import IMaintenanceRepository from '../../repositories/IMaintenanceRepository';

class MaintenanceRepository implements IMaintenanceRepository {
  private prisma = new PrismaClient();

  public async create(
    description: string,
    utilityCounter: number,
  ): Promise<Manutencao> {
    const maintenance = await this.prisma.manutencao.create({
      data: {
        description,
        utilityCounter,
      },
    });

    return maintenance;
  }

  public async getAll(): Promise<Manutencao[]> {
    const maintenances = await this.prisma.manutencao.findMany();

    return maintenances;
  }
}

export default MaintenanceRepository;
