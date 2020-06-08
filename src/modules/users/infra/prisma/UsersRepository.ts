import { User, PrismaClient } from '@prisma/client';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../../repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private prisma = new PrismaClient();

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findOne({
      where: { email },
    });

    return user;
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}

export default UsersRepository;
