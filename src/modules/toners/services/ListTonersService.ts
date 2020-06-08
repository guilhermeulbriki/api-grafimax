import { Toner } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import ITonerRepository from '../repositories/ITonerRepository';

@injectable()
export default class ListTonersService {
  constructor(
    @inject('TonerRepository')
    private tonerRepository: ITonerRepository,
  ) {}

  public async execute(): Promise<Toner[]> {
    const toners = await this.tonerRepository.getAll();

    return toners;
  }
}
