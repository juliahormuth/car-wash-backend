import { injectable, inject } from "tsyringe"
import { IServicesDTO } from "../dto/IServices.dto";
import { IServicesRepository } from "../infra/repositories/IServicesRepository";


@injectable()
class CreateServicesUseCase {
    
    constructor(
        @inject("ServicesRepository")
        private servicesRepository: IServicesRepository
    ) {}

    async execute( { 
      customer_id,
      car_id,
      wash_id,
      wash_type,
      value,
      start_wash,
      expected_end_wash
        }: IServicesDTO): Promise<void> {

         const service =  await this.servicesRepository.create({
            customer_id,
            car_id,
            wash_id,
            wash_type,
            value,
            start_wash,
            expected_end_wash
            })

            return service;
        }
}

export { CreateServicesUseCase }