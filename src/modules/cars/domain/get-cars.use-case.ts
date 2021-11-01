import { injectable, inject } from "tsyringe";
import { Cars } from "../infra/entities/Cars";
import { ICarsRepository } from "../infra/repositories/ICarsRepository";




@injectable()
class GetCarsUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(): Promise<Cars[]>{

            const employees = await this.carsRepository.getAll();
            
            return employees;
        }
}

export { GetCarsUseCase }