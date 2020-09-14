import { Router } from 'express';

import ensureAtheticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAtheticated);

providersRouter.get('/', providersController.index);

export default providersRouter;
