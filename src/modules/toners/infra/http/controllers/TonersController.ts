import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ChangeTonerService from '../../../services/ChangeTonerService';
import ListTonersService from '../../../services/ListTonersService';
import GetFilteredTonersService from '../../../services/GetFilteredTonersService';
import FilterByColorService from '../../../services/FilterByColorService';

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

  public async filter(request: Request, response: Response): Promise<Response> {
    const { field, order } = request.query;

    const filteredToners = container.resolve(GetFilteredTonersService);

    const toners = await filteredToners.execute({
      field: String(field),
      order: String(order),
    });

    return response.json(toners);
  }

  public async filterByColor(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { color } = request.query;

    const filteredToners = container.resolve(FilterByColorService);

    const toners = await filteredToners.execute(String(color));

    return response.json(toners);
  }
}
