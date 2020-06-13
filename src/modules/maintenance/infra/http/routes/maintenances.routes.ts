import { Router } from 'express';

import ensureAuthentication from '../../../../../shared/middlewares/ensureAuthenticated';
import MaintenanceController from '../controllers/MaintenanceController';

const manutencaoRouter = Router();
const maintenanceController = new MaintenanceController();

manutencaoRouter.use(ensureAuthentication);

manutencaoRouter.get('/', maintenanceController.show);
manutencaoRouter.post('/', maintenanceController.create);

export default manutencaoRouter;
