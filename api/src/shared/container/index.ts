import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointementsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointementsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointementsRepository>(
  'AppointementsRepository',
  AppointementsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
