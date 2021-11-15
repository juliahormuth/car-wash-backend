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

    async getAll(): Promise<Wash[]> {
        const wash = await this.repository.find();
        return wash;
    }

    async findById(id:string): Promise<Wash> {
        const wash = await this.repository.findOne(id)
        return wash;
   }

   async updateById(id: string, request: IWashDTO): Promise<Wash>{

    const wash = await this.repository.findOne(id)

    this.repository.merge(wash, request)

    const result = await this.repository.save(wash)

    return result
}

async deleteById(id: string): Promise<void> {
    const wash = await this.repository.findOne(id)

     await this.repository.remove(wash)
}

}

export { WashRepository }
