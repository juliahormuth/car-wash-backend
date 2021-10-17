import { ICreateUserDTO } from '../dto/ICreateUserDTO';
import { User } from '../entities/User'


interface IUsersRepository {
   create(request: ICreateUserDTO): Promise<void>
   findByEmail(email: string): Promise<User>
}

export { IUsersRepository }