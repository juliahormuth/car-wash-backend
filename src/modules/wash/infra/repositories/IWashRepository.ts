import { IWashDTO } from "../../dto/IWashDTO";
import { Wash } from "../entities/Wash";



interface IWashRepository {
    create(request: IWashDTO): Promise<void>
    getAll(): Promise<Wash[]>
    findById(id:string): Promise<Wash>
    updateById(id: string, request: IWashDTO): Promise<Wash>
    deleteById(id: string): Promise<void>
    }


export { IWashRepository }