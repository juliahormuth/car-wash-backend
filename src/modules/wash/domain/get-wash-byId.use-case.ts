import { inject, injectable } from "tsyringe";
import { Wash } from "../infra/entities/Wash";
import { IWashRepository } from "../infra/repositories/IWashRepository";



@injectable()
class GetByIdWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository
    ) {}

    async execute(id: string): Promise<Wash>{

            const wash = await this.washRepository.findById(id);
            return wash;
        }
}

export {GetByIdWashUseCase}