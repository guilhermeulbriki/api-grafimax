import { Toner } from '@prisma/client';
import ITrocaTonerDTO from '../dtos/ITrocaTonerDTO';
import { Colors } from '../dtos/IGetTheLastDTO';

export default interface ITrocaTonerRepository {
  create(data: ITrocaTonerDTO): Promise<Toner>;
  getTheLast(color: Colors): Promise<Toner[]>;
  getAll(): Promise<Toner[]>;
  getByUtilityDesc(): Promise<Toner[]>;
  getByUtilityAsc(): Promise<Toner[]>;
  getByDateDesc(): Promise<Toner[]>;
  getByDateAsc(): Promise<Toner[]>;
  getByCopiesDesc(): Promise<Toner[]>;
  getByCopiesAsc(): Promise<Toner[]>;
}
