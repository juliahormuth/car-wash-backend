import { inject, injectable } from "tsyringe"
import { ICarsDTO } from "../dto/ICars.dto"
import { Cars } from "../infra/entities/Cars"
import { ICarsRepository } from "../infra/repositories/ICarsRepository"



@injectable()
class DeleteCarByIdUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(id: string): Promise<void>{

            const cars = await this.carsRepository.deleteById(id);
            return cars
        }
}

export {DeleteCarByIdUseCase}