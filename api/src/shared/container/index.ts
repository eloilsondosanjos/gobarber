import { container } from 'tsyringe';

import IAppointementsRepository from '@modules/appointements/repositories/IAppointmentsRepository';
import AppointementsRepository from '@modules/appointements/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointementsRepository>(
  'AppointementsRepository',
  AppointementsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
