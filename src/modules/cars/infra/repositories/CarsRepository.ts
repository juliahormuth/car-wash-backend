import { getRepository, Repository } from "typeorm";
import { ICarsRepository } from "./ICarsRepository";
import { ICarsDTO } from "../../dto/ICars.dto";
import { Cars } from "../entities/Cars";


class CarsRepository implements ICarsRepository{
    private repository: Repository<Cars>

    constructor(){
        this.repository = getRepository(Cars);
    }
    
    async create(request: ICarsDTO): Promise<void> {
        const car = this.repository.create({
            board: request.board,
            model: request.model,
            brand: request.brand,
            size: request.size,
            color: request.color,
        });

        await this.repository.save(car)

    }

    async findById(id: string): Promise<Cars>{
        const car = await this.repository.findOne(id)
       
       return car;
    }

    async findByBoard(board: string): Promise<Cars>{
        const car = await this.repository.findOne({board})
       
       return car;
    }

    async getAll(): Promise<Cars[]> {
        const cars = await this.repository.find();
        return cars;
    }
    
    async updateById(id: string, request: ICarsDTO): Promise<Cars>{

        const car = await this.repository.findOne(id)

        this.repository.merge(car, request)

        const result = await this.repository.save(car)

        return result
    }
       
    async deleteById(id: string): Promise<void> {
        const car = await this.repository.findOne(id)
        await this.repository.remove(car)
    }

}

export { CarsRepository }