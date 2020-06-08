import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ChangeTonerService from '../../../services/ChangeTonerService';
import ListTonersService from '../../../services/ListTonersService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { color, utilityCounter } = request.body;

    const changeToner = container.resolve(ChangeTonerService);

    const toner = await changeToner.execute({
      color,
      utilityCounter,
    });

    return response.json(toner);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const litsToners = container.resolve(ListTonersService);

    const toners = await litsToners.execute();

    return response.json(toners);
  }
}
