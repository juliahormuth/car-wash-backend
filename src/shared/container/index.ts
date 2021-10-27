import { container } from 'tsyringe';

import { IEmployeesRepository } from 'src/modules/employees/infra/repositories/IEmployeesRepository';
import { EmployeesRepository } from '../../modules/employees/infra/repositories/EmployeesRepository'
import { ICustomersRepository } from 'src/modules/customers/infra/repositories/ICustomersRepository';
import { CustomersRepository } from '../../modules/customers/infra/repositories/CustomersRepository'




container.registerSingleton<IEmployeesRepository>(
    "EmployeesRepository", 
    EmployeesRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository", 
    CustomersRepository
);
