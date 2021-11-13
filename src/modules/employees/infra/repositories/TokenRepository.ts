import { getRepository, Repository } from "typeorm";
import { ITokenDTO } from "../../dto/IToken.dto";
import { Token } from "../entities/EmployeesToken";
import { ITokenRepository } from "./ITokenRepository";


class TokenRepository implements ITokenRepository {
  private repository: Repository<Token>

  constructor() {
      this.repository = getRepository(Token)
  }
    
    async create({ expires_date, refresh_token, employees_id }: ITokenDTO): Promise<Token> {
      const employeesToken  = this.repository.create({
          expires_date,
          refresh_token,
          employees_id
      })

      await this.repository.save( employeesToken)
       
      return  employeesToken;
    }
    
}

export { TokenRepository }