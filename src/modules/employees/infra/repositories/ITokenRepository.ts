import { ITokenDTO } from "../../dto/IToken.dto";
import { Token } from "../entities/EmployeesToken";


interface ITokenRepository {

create({expires_date, refresh_token, employees_id}: ITokenDTO): Promise<Token>
}

export { ITokenRepository }