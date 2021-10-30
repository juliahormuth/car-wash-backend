import dayjs from "dayjs"
import { IDateProvider } from "src/shared/container/providers/IDateProvider"
import { AppError } from "src/shared/errors/AppError";

@injectable()
class CreateWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private customersRepository: ICustomersRepository,
        @inject("DateProvider)
        private dateProvider: IDateProvider
    ) {}

    async execute( { 
       name, 
       document,
       address,
       phoneNumber
        }: ICustomersDTO): Promise<void> {
            

            const customer = await this.customersRepository.create({
            name,
            document,
            address,
            phoneNumber
            })

            // HERE

            const dateNow = this.dateProvider.dateNow();

            const compare = this.dateProvider.compareInHours(dateNow, expect_return_date)


            if(compare < 24 ) {
                throw new AppError('Invalid return time');
            }

            const wash = await this.customersRepository.create({
                user_id,
                car_id,
                expect_return_date
            })
        }


 
}

export { CreateWashUseCase }