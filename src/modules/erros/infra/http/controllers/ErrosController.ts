import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateErroService from '../../../services/CreateErroService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body;

    const createErro = container.resolve(CreateErroService);

    const erro = await createErro.execute({
      code,
      description,
    });

    return response.json(erro);
  }
}
