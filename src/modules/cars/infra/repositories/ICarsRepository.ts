import { ICarsDTO } from '../../dto/ICars.dto'
import { Cars } from '../entities/Cars'

interface ICarsRepository {
    create(request: ICarsDTO): Promise<void>
    findById(id: string): Promise<Cars>
    getAll(): Promise<Cars[]>
    updateById(id: string, request: ICarsDTO): Promise<Cars>
    deleteById(id: string): Promise<void>

 }

 export { ICarsRepository }