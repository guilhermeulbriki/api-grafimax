import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequestDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return user;
  }
}
