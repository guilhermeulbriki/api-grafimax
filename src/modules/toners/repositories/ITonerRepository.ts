import { Toner } from '@prisma/client';
import ITrocaTonerDTO from '../dtos/ITrocaTonerDTO';

export default interface ITrocaTonerRepository {
  create(data: ITrocaTonerDTO): Promise<Toner>;
  getTheLast(): Promise<Toner[]>;
  getAll(): Promise<Toner[]>;
}
