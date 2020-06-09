import { Toner } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import ITonerRepository from '../repositories/ITonerRepository';
import { Colors } from '../dtos/IGetTheLastDTO';

interface IRequestDTO {
  color: Colors;
  utilityCounter: number;
}

@injectable()
export default class ChangeTonerService {
  constructor(
    @inject('TonerRepository')
    private tonerRepository: ITonerRepository,
  ) {}

  public async execute({ color, utilityCounter }: IRequestDTO): Promise<Toner> {
    const lastTrocaToner = await this.tonerRepository.getTheLast(color);

    let copies = utilityCounter;

    if (lastTrocaToner.length > 0) {
      copies = utilityCounter - lastTrocaToner[0].utilityCounter;
    }

    const changeToner = await this.tonerRepository.create({
      color,
      utilityCounter,
      copies,
    });

    return changeToner;
  }
}
