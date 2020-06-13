import { Toner } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import ITonerRepository from '../repositories/ITonerRepository';

@injectable()
export default class FilterByColor {
  constructor(
    @inject('TonerRepository')
    private tonerRepository: ITonerRepository,
  ) {}

  public async execute(color: string): Promise<Toner[]> {
    const toners = await this.tonerRepository.filterByColor(color);

    return toners;
  }
}
