import { Router } from 'express';

import ensureAuthentication from '../../../../../shared/middlewares/ensureAuthenticated';
import ErrosController from '../controllers/ErrosController';

const errosRouter = Router();
const errosController = new ErrosController();

errosRouter.use(ensureAuthentication);

errosRouter.get('/', errosController.show);
errosRouter.post('/', errosController.create);

export default errosRouter;
