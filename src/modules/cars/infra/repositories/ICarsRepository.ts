import { ICarsDTO } from '../../dto/ICars.dto'

interface ICarsRepository {
    create(request: ICarsDTO): Promise<void>
    getAll(): Promise<ICarsDTO[]>
    findById(id: string): Promise<ICarsDTO>
    findByBoard(email: string): Promise<ICarsDTO>
    deleteById(id: string): Promise<void>
 }

 export { ICarsRepository }