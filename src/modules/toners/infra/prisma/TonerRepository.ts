import { Toner, PrismaClient } from '@prisma/client';
import ITrocaTonerDTO from '../../dtos/ITrocaTonerDTO';
import ITonerRepository from '../../repositories/ITonerRepository';

class TonersRepository implements ITonerRepository {
  private prisma = new PrismaClient();

  public async create({
    color,
    copies,
    utilityCounter,
  }: ITrocaTonerDTO): Promise<Toner> {
    const toner = await this.prisma.toner.create({
      data: {
        color,
        copies,
        utilityCounter,
      },
    });

    return toner;
  }

  public async getTheLast(): Promise<Toner[]> {
    const theLast = await this.prisma.toner.findMany({
      orderBy: { id: 'desc' },
    });

    return theLast;
  }

  public async getAll(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany();

    return toners;
  }
}

export default TonersRepository;
