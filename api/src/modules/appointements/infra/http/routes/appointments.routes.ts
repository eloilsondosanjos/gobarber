import { Router } from 'express';

import AppointmentsController from '../controllers/AppointmentsController';
import ensureAtheticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAtheticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
