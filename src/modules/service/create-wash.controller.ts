

class CreateWashController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {expect_return_date , car_id} = request.body;
        
        const createWashUseCase = container.resolve(CreateWashUseCse)

       const wash =  await createWashUseCase.execute({
            car_id;
            expect_return_date
        })

        return response.status(201).json(wash)
    }
}