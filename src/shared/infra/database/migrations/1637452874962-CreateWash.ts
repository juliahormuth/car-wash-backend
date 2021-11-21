import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateWash1637452874962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "wash",
                columns: [
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "washType",
                        type: "varchar",
                    },
                    {
                         name: "value",
                         type: "numeric"
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
        await queryRunner.dropTable("wash")
    }

}
