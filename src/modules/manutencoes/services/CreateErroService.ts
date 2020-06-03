import { PrismaClient, Manutencao } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequestDTO {
  description: string;
  utilityCounter: number;
}

export default class CreateUserService {
  public async execute({
    description,
    utilityCounter,
  }: IRequestDTO): Promise<Manutencao> {
    const manutencao = await prisma.manutencao.create({
      data: {
        description,
        utilityCounter,
      },
    });

    return manutencao;
  }
}
