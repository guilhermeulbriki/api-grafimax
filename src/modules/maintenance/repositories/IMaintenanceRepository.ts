import { Manutencao } from '@prisma/client';

export default interface IMMaintenanceRepository {
  create(description: string, utilityCounter: number): Promise<Manutencao>;
  getAll(): Promise<Manutencao[]>;
}
