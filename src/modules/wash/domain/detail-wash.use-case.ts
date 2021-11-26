import { injectable, inject } from "tsyringe"
import { IWashDTO } from "../dto/IWashDTO"
import { IWashRepository } from "../infra/repositories/IWashRepository"
import { IDateProvider } from '../../../shared/container/providers/IDateProvider';
import { ICustomersRepository } from '../../customers/infra/repositories/ICustomersRepository';
import { ICarsRepository } from '../../cars/infra/repositories/ICarsRepository';
import { AppError } from '../../../shared/errors/AppError';


@injectable()
class  DetailWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute( { 
       washType, 
       value,
       start_wash,
       expected_end_wash,
       customer,
       car
        }: IWashDTO): Promise<void> {


        const customerFound = await this.customersRepository.findById(customer.id)
            if(!customerFound){
             throw new AppError('Cliente não encontrado!')
            }

            const carFound = await this.carsRepository.findById(car.id)
             if(!carFound) {
                throw new AppError('Car não encontrado!')
            }

             start_wash = this.dateProvider.createDateNow();

            //  start_wash = await this.dateProvider.convertToBrazilianHour(start_wash)
            
             expected_end_wash = await this.dateProvider.addDetailedWash(start_wash)

             washType = 'Detalhada'
             value = 120

               await this.washRepository.create({
                washType,
                value,
                start_wash,
                expected_end_wash,
                customer,
                car
                })
   }
}

export { DetailWashUseCase }