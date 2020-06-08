import { container } from 'tsyringe';

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/prisma/UsersRepository';

import ITonerRepository from '../../modules/toners/repositories/ITonerRepository';
import TonerRepository from '../../modules/toners/infra/prisma/TonerRepository';

import IMaintenanceRepository from '../../modules/maintenance/repositories/IMaintenanceRepository';
import MaintenanceRepository from '../../modules/maintenance/infra/prisma/MaintenanceRepository';

import IErrorsRepository from '../../modules/errors/repositories/IErrorsRepository';
import ErrorsRepository from '../../modules/errors/infra/prisma/ErrorsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITonerRepository>(
  'TonerRepository',
  TonerRepository,
);

container.registerSingleton<IMaintenanceRepository>(
  'MaintenanceRepository',
  MaintenanceRepository,
);

container.registerSingleton<IErrorsRepository>(
  'ErrorsRepository',
  ErrorsRepository,
);
