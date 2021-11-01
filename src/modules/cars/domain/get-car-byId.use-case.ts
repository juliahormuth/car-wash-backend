import { injectable, inject } from "tsyringe";
import { Cars } from "../infra/entities/Cars";
import { ICarsRepository } from "../infra/repositories/ICarsRepository";





@injectable()
class GetByIdCarUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(id: string): Promise<Cars>{

            const cars = await this.carsRepository.findById(id);
            
            return cars
        }
}

export { GetByIdCarUseCase }