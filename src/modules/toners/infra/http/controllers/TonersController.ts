import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TrocaTonerService from '../../../services/TrocaTonerService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { color, utilityCounter } = request.body;

    const trocaToner = container.resolve(TrocaTonerService);

    const toner = await trocaToner.execute({
      color,
      utilityCounter,
    });

    return response.json(toner);
  }
}
