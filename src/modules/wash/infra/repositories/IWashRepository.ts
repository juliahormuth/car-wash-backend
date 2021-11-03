import { IWashDTO } from "../../dto/IWashDTO";



interface IWashRepository {
    create(request: IWashDTO): Promise<void>
    }


export { IWashRepository }