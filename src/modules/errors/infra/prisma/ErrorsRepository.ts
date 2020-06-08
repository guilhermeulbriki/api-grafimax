import { PrismaClient, Erros } from '@prisma/client';
import IErrorsRepository from '../../repositories/IErrorsRepository';

class ErrorsRepository implements IErrorsRepository {
  private prisma = new PrismaClient();

  public async create(description: string, code: string): Promise<Erros> {
    const error = await this.prisma.erros.create({
      data: {
        code,
        description,
      },
    });

    return error;
  }

  public async getAll(): Promise<Erros[]> {
    const errors = await this.prisma.erros.findMany();

    return errors;
  }
}

export default ErrorsRepository;
