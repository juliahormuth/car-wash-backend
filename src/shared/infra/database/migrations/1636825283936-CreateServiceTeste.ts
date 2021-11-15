import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateServiceTeste1636825283936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "servicesTeste",
              columns: [
                { 
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "customer_id",
                    type: "uuid",
                  },
                {
                    name: "car_id",
                    type: "uuid",
                  },
                {
                    name: "wash_id",
                    type: "uuid",
                },
                {
                    name: "wash_type",
                    type: "varchar",
                },
                {
                  name: "value",
                  type: "decimal",
                },
                {
                  name: "start_wash",
                  type: "timestamp with time zone",
                  default: "now()",
                },
                {
                  name: "expected_end_wash",
                  type: "timestamp with time zone",
                },
                {
                  name: "created_at",
                  type: "timestamp with time zone",
                  default: "now()",
                },
              ],
             
            })
          );

          await queryRunner.createForeignKey(
            'servicesTeste',
            new TableForeignKey({
                columnNames: ['customer_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'customers',
                name: 'fk_servicesTeste_customer_id',
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
        await queryRunner.createForeignKey(
            'servicesTeste',
            new TableForeignKey({
                columnNames: ['car_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'cars',
                name: 'fk_servicesTeste_cars_id',
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )

        await queryRunner.createForeignKey(
            'servicesTeste',
            new TableForeignKey({
                columnNames: ['wash_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'wash',
                name: 'fk_servicesTeste_wash_id',
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
        await queryRunner.createForeignKey(
            'servicesTeste',
            new TableForeignKey({
                columnNames: ['wash_type'],
                referencedColumnNames: ['washType'],
                referencedTableName: 'wash',
                name: 'fk_servicesTeste_wash_type',
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'servicesTeste',
            'fk_services_customer_id',
          );
          await queryRunner.dropForeignKey(
            'servicesTeste',
            'fk_services_cars_id',
          );
          await queryRunner.dropForeignKey(
            'servicesTeste',
            'fk_services_wash_id',
          );  
          await queryRunner.dropForeignKey(
            'servicesTeste',
            'fk_services_wash_type',
          );     
          
        await queryRunner.dropTable('servicesTeste');
    }

}
