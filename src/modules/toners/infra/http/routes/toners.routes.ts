import { Router } from 'express';

import ensureAuthentication from '../../../../../shared/middlewares/ensureAuthenticated';
import TonersController from '../controllers/TonersController';

const usersRouter = Router();
const tonersController = new TonersController();

usersRouter.use(ensureAuthentication);

usersRouter.get('/', tonersController.show);
usersRouter.post('/', tonersController.create);

export default usersRouter;
