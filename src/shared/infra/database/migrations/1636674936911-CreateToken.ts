import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateToken1636674936911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
         new Table({
             name: "tokens",
             columns: [
                 {
                     name: "id",
                     type: "uuid",
                     isPrimary: true,
                 },
                 {
                     name: "refresh_token",
                     type: "varchar"
                 },
                 {
                     name: "employees_id",
                     type: "uuid"
                 },
                 {
                     name: "expires_date",
                     type: "timestamp",
                 },
                 {
                     name: "created_at",
                     type: "timestamp",
                     default: "now()",
                 },
                 
             ],
             foreignKeys: [
                 {
                     name: "FKEmployeesToken",
                     referencedTableName: "employees",
                     referencedColumnNames: ["id"],
                     columnNames: ["employees_id"],
                     onDelete: "CASCADE",
                     onUpdate: "CASCADE",
                 }
             ]
         })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tokens")
    }

}
