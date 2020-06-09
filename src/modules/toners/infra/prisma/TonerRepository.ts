import { Toner, PrismaClient } from '@prisma/client';
import ITrocaTonerDTO from '../../dtos/ITrocaTonerDTO';
import ITonerRepository from '../../repositories/ITonerRepository';
import { Colors } from '../../dtos/IGetTheLastDTO';

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

  public async getTheLast(color: Colors): Promise<Toner[]> {
    const theLast = await this.prisma.toner.findMany({
      orderBy: { utilityCounter: 'desc' },
      where: { color },
    });

    return theLast;
  }

  public async getAll(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany();

    return toners;
  }

  public async getByUtilityDesc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        utilityCounter: 'desc',
      },
    });

    return toners;
  }

  public async getByUtilityAsc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        utilityCounter: 'asc',
      },
    });

    return toners;
  }

  public async getByCopiesDesc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        copies: 'desc',
      },
    });

    return toners;
  }

  public async getByCopiesAsc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        copies: 'asc',
      },
    });

    return toners;
  }

  public async getByDateDesc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        date: 'desc',
      },
    });

    return toners;
  }

  public async getByDateAsc(): Promise<Toner[]> {
    const toners = await this.prisma.toner.findMany({
      orderBy: {
        date: 'asc',
      },
    });

    return toners;
  }
}

export default TonersRepository;
