import { Router } from 'express';

import TonersController from '../controllers/TonersController';

const usersRouter = Router();
const tonersController = new TonersController();

usersRouter.post('/', tonersController.create);

export default usersRouter;
