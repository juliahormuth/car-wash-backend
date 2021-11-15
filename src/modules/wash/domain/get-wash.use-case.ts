import { injectable, inject } from "tsyringe";
import { Wash } from "../infra/entities/Wash";
import { IWashRepository } from "../infra/repositories/IWashRepository";

@injectable()
class GetWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository
    ) {}

    async execute(): Promise<Wash[]>{

            const wash = await this.washRepository.getAll();
            return wash;
        }
}

export { GetWashUseCase }