import { injectable, inject } from "tsyringe"
import { ICarsDTO } from "../dto/ICars.dto"
import { Cars } from "../infra/entities/Cars"
import { ICarsRepository } from "../infra/repositories/ICarsRepository"


@injectable()
class UpdateCarsUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(id: string,{board, model, brand, size, color}: ICarsDTO): Promise<Cars> {
        
        
        const result = await this.carsRepository.updateById(id, {board, model, brand, size, color})
    
        return result
    }
}

export { UpdateCarsUseCase }