import { Router } from 'express';

import MaintenanceController from '../controllers/MaintenanceController';

const manutencaoRouter = Router();
const maintenanceController = new MaintenanceController();

manutencaoRouter.get('/', maintenanceController.show);
manutencaoRouter.post('/', maintenanceController.create);

export default manutencaoRouter;
