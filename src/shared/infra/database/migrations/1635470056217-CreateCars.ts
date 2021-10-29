import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1635470056217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "placa",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "modelo",
                        type: "varchar",
                    },
                    {
                        name: "marca",
                        type: "varchar",
                    },
                    {
                        name: "tamanho",
                        type: "varchar",
                    },
                    {
                        name: "cor",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ],
            })
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars")
    }

}
