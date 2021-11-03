import { injectable, inject } from "tsyringe"
import { ICarsDTO } from "../dto/ICars.dto"
import { ICarsRepository } from "../infra/repositories/ICarsRepository"
import { AppError } from '../../../shared/errors/AppError'

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

            const carAlreadyExists = await this.carsRepository.findByBoard(board)

            if(carAlreadyExists) {
                throw new AppError('Board already exists!')
            }
            
          await this.carsRepository.create({
            board,
            model,
            brand,
            size,
            color
            })
        }
}

export { CreateCarsUseCase }