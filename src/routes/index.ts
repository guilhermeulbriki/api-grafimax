import { Router } from 'express';

import usersRouter from 'modules/users/infra/http/routes/users.routes';
import tonersRouter from 'modules/toners/infra/http/routes/toners.routes';
import errosRouter from 'modules/erros/infra/http/routes/erros.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/toners', tonersRouter);
routes.use('/erros', errosRouter);

export default routes;
