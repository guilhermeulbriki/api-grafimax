import { Router } from 'express';

import ManutencoesController from '../controllers/ManutencoesController';

const manutencaoRouter = Router();
const manutencoesController = new ManutencoesController();

manutencaoRouter.post('/', manutencoesController.create);

export default manutencaoRouter;
