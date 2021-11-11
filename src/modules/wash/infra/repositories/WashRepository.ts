import { getRepository, Repository } from "typeorm";
import { IWashDTO } from "../../dto/IWashDTO";
import { Wash } from '../entities/Wash'
import { IWashRepository } from "./IWashRepository";



class WashRepository implements IWashRepository{
    private repository: Repository<Wash>

    constructor(){ 
        this.repository = getRepository(Wash);
    }
    async create(request: IWashDTO): Promise<void> {
        const wash = this.repository.create({
         washType: request.washType,
         value: request.value
        });

        await this.repository.save(wash)
    }

}
export { WashRepository }
