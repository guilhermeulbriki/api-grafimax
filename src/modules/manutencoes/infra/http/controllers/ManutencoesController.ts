import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateErroService from '../../../services/CreateErroService';

export default class ManutencoesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { utilityCounter, description } = request.body;

    const createErro = container.resolve(CreateErroService);

    const manutencoes = await createErro.execute({
      utilityCounter,
      description,
    });

    return response.json(manutencoes);
  }
}
