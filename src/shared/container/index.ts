import { container } from 'tsyringe';

import './providers/index'
import { IEmployeesRepository } from 'src/modules/employees/infra/repositories/IEmployeesRepository';
import { EmployeesRepository } from '../../modules/employees/infra/repositories/EmployeesRepository'
import { ICustomersRepository } from 'src/modules/customers/infra/repositories/ICustomersRepository';
import { CustomersRepository } from '../../modules/customers/infra/repositories/CustomersRepository'
import { ICarsRepository } from '../../modules/cars/infra/repositories/ICarsRepository'
import { CarsRepository } from '../../modules/cars/infra/repositories/CarsRepository'



container.registerSingleton<IEmployeesRepository>(
    "EmployeesRepository", 
    EmployeesRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository", 
    CustomersRepository
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository", 
    CarsRepository
);
