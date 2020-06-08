import { Erros } from '@prisma/client';

export default interface IErrorsRepository {
  create(description: string, code: string): Promise<Erros>;
  getAll(): Promise<Erros[]>;
}
