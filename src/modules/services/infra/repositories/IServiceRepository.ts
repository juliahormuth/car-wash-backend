import { IServicesDTO } from "../../dto/IServices.dto";


interface IServicesRepository {
    create(request: IServicesDTO): Promise<void>
  
}   
export {IServicesRepository }