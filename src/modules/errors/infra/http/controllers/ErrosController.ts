import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateErrorService from '../../../services/CreateErrorService';
import ListErrorsService from '../../../services/ListErrorsService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body;

    const createError = container.resolve(CreateErrorService);

    const error = await createError.execute({
      code,
      description,
    });

    return response.json(error);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listErrors = container.resolve(ListErrorsService);

    const errors = await listErrors.execute();

    return response.json(errors);
  }
}
