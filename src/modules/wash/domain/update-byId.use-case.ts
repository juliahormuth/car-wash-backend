import { injectable, inject } from "tsyringe"
import { IWashDTO } from "../dto/IWashDTO"
import { Wash } from "../infra/entities/Wash"
import { IWashRepository } from "../infra/repositories/IWashRepository"


@injectable()
class UpdateWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository
    ) {}

    async execute(id: string,{washType, value}: IWashDTO): Promise<Wash> {
        
        const wash = await this.washRepository.updateById(id, {washType, value})
    
        return wash
    }
}

export { UpdateWashUseCase }