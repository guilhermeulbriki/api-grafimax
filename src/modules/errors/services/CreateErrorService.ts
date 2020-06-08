import { PrismaClient, Erros } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequestDTO {
  description: string;
  code: string;
}

export default class CreateErrorService {
  public async execute({ description, code }: IRequestDTO): Promise<Erros> {
    const error = await prisma.erros.create({
      data: {
        description,
        code: code.toUpperCase(),
      },
    });

    return error;
  }
}
