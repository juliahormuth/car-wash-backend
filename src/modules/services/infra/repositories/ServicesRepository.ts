import { getRepository, Repository } from "typeorm";
import { IServicesDTO } from "../../dto/IServices.dto";
import { Services } from "../entities/Services";
import { IServicesRepository } from "./IServicesRepository";


class ServicesRepository implements IServicesRepository{
    private repository: Repository<Services>

    constructor(){
        this.repository = getRepository(Services);
    }
    async create(request: IServicesDTO): Promise<void> {
        const service = this.repository.create({
            customer_id: request.customer_id,
            car_id: request.car_id,
            wash_id: request.wash_id,
            wash_type: request.wash_type,
            value: request.value,
            start_wash: request.start_wash,
            expected_end_wash: request.expected_end_wash,
        });

        await this.repository.save(service)
    }
}

export { ServicesRepository };