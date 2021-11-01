import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1635777844261 implements MigrationInterface {

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
                        name: "board",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "model",
                        type: "varchar",
                    },
                    {
                        name: "brand",
                        type: "varchar",
                    },
                    {
                        name: "size",
                        type: "varchar",
                    },
                    {
                        name: "color",
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
