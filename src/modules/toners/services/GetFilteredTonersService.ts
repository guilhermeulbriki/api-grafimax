import { Toner } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import ITonerRepository from '../repositories/ITonerRepository';

interface IExecute {
  field: string;
  order: string;
}

@injectable()
export default class GetFilteredTonersService {
  constructor(
    @inject('TonerRepository')
    private tonerRepository: ITonerRepository,
  ) {}

  public async execute({ field, order }: IExecute): Promise<Toner[]> {
    let filteredToners: Toner[] = [];

    console.log(field, order);

    switch (field) {
      case 'utilityCounter':
        if (order === 'desc') {
          filteredToners = await this.tonerRepository.getByUtilityDesc();
        } else {
          filteredToners = await this.tonerRepository.getByUtilityAsc();
        }
        break;

      case 'date':
        if (order === 'desc') {
          filteredToners = await this.tonerRepository.getByDateDesc();
        } else {
          filteredToners = await this.tonerRepository.getByCopiesAsc();
        }
        break;

      case 'copies':
        if (order === 'desc') {
          filteredToners = await this.tonerRepository.getByCopiesDesc();
        } else {
          filteredToners = await this.tonerRepository.getByCopiesAsc();
        }
        break;

      default:
        filteredToners = await this.tonerRepository.getByUtilityDesc();
        break;
    }

    return filteredToners;
  }
}
