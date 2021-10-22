import { container } from 'tsyringe';

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"

import { CategoriesRepository } from '../../modules/cars/infra/repositories/CategoriesRepository'

import  { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

import { SpecificationsRepository } from '../../modules/cars/infra/repositories/SpecificationsRepository'

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/accounts/infra/repositories/UsersRepository'

// ICategoriesRepository para dentro do:
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", 
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", 
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", 
    UsersRepository
);
