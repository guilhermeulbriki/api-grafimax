import { PrismaClient, Toner } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequestDTO {
  color: string;
  utilityCounter: number;
}

export default class CreateUserService {
  public async execute({ color, utilityCounter }: IRequestDTO): Promise<Toner> {
    const lastTrocaToner = await prisma.toner.findMany({
      orderBy: { id: 'desc' },
    });

    let copies = utilityCounter;

    if (lastTrocaToner.length > 0) {
      copies = utilityCounter - lastTrocaToner[0].utilityCounter;
    }

    const trocaToner = await prisma.toner.create({
      data: {
        color,
        utilityCounter,
        copies,
      },
    });

    return trocaToner;
  }
}
