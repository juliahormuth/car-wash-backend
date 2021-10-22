import { User } from '../typeorm/entities/User';
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User);
    }
    async create(request: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name: request.name,
            email: request.email,
            password: request.password,
            driver_license: request.driver_license,
            id: request.id,
            avatar: request.avatar,
   
        });

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
       const user = await this.repository.findOne({ email })

       return user;
    }

    async findById(id: string): Promise<User>{
        const user = await this.repository.findOne(id)
       
       return user;
    }

}

export { UsersRepository }