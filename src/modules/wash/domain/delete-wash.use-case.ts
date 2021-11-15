import { injectable, inject } from "tsyringe";
import { IWashRepository } from "../infra/repositories/IWashRepository";


@injectable()
class DeleteWashByIdUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository
    ) {}

    async execute(id: string): Promise<void>{

            const wash = await this.washRepository.deleteById(id);
            return wash;
        }
}

export { DeleteWashByIdUseCase } 