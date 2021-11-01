import { injectable, inject } from "tsyringe"
import { ICarsDTO } from "../dto/ICars.dto"
import { ICarsRepository } from "../infra/repositories/ICarsRepository"


@injectable()
class CreateCarsUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute( { 
       board, 
       model,
       brand,
       size,
       color
        }: ICarsDTO): Promise<void> {
            

            const cars = await this.carsRepository.create({
            board,
            model,
            brand,
            size,
            color
            })
        }
}

export { CreateCarsUseCase }