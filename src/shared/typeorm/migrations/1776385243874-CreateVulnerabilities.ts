import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVulnerabilities1776385243874 implements MigrationInterface {
    name = 'CreateVulnerabilities1776385243874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vulnerability" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cve" character varying NOT NULL, "severidade" character varying NOT NULL, "descricao" character varying NOT NULL, "status" character varying NOT NULL, "descoberta" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0d1b35aef20e00b7b907cca7358" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vulnerability"`);
    }

}
