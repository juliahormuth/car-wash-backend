import { container } from 'tsyringe';

import { IEmployeesRepository } from 'src/modules/employees/infra/repositories/IEmployeesRepository';
import { EmployeesRepository } from '../../modules/employees/infra/repositories/EmployeesRepository'


// ICategoriesRepository para dentro do:


container.registerSingleton<IEmployeesRepository>(
    "EmployeesRepository", 
    EmployeesRepository
);
