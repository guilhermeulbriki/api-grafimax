import { Router } from 'express';

import usersRouter from 'modules/users/infra/http/routes/users.routes';
import sessionsRouter from 'modules/users/infra/http/routes/sessions.routes';
import tonersRouter from 'modules/toners/infra/http/routes/toners.routes';
import errorsRouter from 'modules/errors/infra/http/routes/errors.routes';
import maintenancesRouter from 'modules/maintenance/infra/http/routes/maintenances.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/toners', tonersRouter);
routes.use('/errors', errorsRouter);
routes.use('/maintenances', maintenancesRouter);

export default routes;
