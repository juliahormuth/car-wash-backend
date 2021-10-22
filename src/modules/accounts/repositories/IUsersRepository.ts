import { ICreateUserDTO } from '../dto/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User'


interface IUsersRepository {
   create(request: ICreateUserDTO): Promise<void>
   findByEmail(email: string): Promise<User>
   findById(id: string): Promise<User>
}

export { IUsersRepository }