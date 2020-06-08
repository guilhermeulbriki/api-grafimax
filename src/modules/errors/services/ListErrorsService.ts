import { Erros } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IErrorsRepository from '../repositories/IErrorsRepository';

@injectable()
export default class ListErrorsService {
  constructor(
    @inject('ErrorsRepository')
    private errorsRepository: IErrorsRepository,
  ) {}

  public async execute(): Promise<Erros[]> {
    const errors = await this.errorsRepository.getAll();

    return errors;
  }
}
