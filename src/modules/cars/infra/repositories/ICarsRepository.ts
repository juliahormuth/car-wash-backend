


interface ICarsRepository {
    create(request: ICarsDTO): Promise<void>
    getAll(): Promise<ICarsDTO[]>
    getById(id: string): Promise<ICarsDTO>
    findById(id: string): Promise<CarsDTO>
    findByBoard(email: string): Promise<CarsDTO>
    deleteById(id: string): Promise<void>
 }
 export { ICarsRepository }