import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RegisterMaintenanceService from '../../../services/RegisterMaintenanceService';
import ListMaintenancesService from '../../../services/ListMaintenancesService';

export default class MaintenancesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { utilityCounter, description } = request.body;

    const registerMaintenance = container.resolve(RegisterMaintenanceService);

    const maintenance = await registerMaintenance.execute({
      utilityCounter,
      description,
    });

    return response.json(maintenance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listMaintenances = container.resolve(ListMaintenancesService);

    const maintenances = await listMaintenances.execute();

    return response.json(maintenances);
  }
}
