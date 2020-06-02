import { Router } from 'express';

import ErrosController from '../controllers/ErrosController';

const errosRouter = Router();
const errosController = new ErrosController();

errosRouter.post('/', errosController.create);

export default errosRouter;
