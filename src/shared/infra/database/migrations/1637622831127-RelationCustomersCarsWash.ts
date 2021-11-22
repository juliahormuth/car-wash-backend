import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCustomersCarsWash1637622831127 implements MigrationInterface {
    name = 'RelationCustomersCarsWash1637622831127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" character varying NOT NULL, "name" character varying NOT NULL, "document" character varying NOT NULL, "address" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "wash" ("id" character varying NOT NULL, "washType" character varying NOT NULL, "value" integer NOT NULL, "start_wash" integer NOT NULL, "expected_end_wash" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "customerId" character varying, "carId" character varying, CONSTRAINT "PK_205a12006b234293a56e2c1bffa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" character varying NOT NULL, "board" character varying NOT NULL, "model" character varying NOT NULL, "brand" character varying NOT NULL, "size" character varying NOT NULL, "color" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" character varying NOT NULL, "name" character varying NOT NULL, "document" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "address" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tokens" ("id" character varying NOT NULL, "refresh_token" character varying NOT NULL, "employees_id" character varying NOT NULL, "expires_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "wash" ADD CONSTRAINT "FK_57c0a63e3a094831cf8713b2dc7" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "wash" ADD CONSTRAINT "FK_917c7915f49d946266f94a24b9a" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tokens" ADD CONSTRAINT "FK_3537f0834c0762d93d93dd967b6" FOREIGN KEY ("employees_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tokens" DROP CONSTRAINT "FK_3537f0834c0762d93d93dd967b6"`);
        await queryRunner.query(`ALTER TABLE "wash" DROP CONSTRAINT "FK_917c7915f49d946266f94a24b9a"`);
        await queryRunner.query(`ALTER TABLE "wash" DROP CONSTRAINT "FK_57c0a63e3a094831cf8713b2dc7"`);
        await queryRunner.query(`DROP TABLE "tokens"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "wash"`);
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
