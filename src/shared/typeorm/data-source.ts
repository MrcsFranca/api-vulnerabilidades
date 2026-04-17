import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Vulnerability from "@modules/vulnerabilities/typeorm/entities/Vulnerability";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apivulns",
    synchronize: false,
    logging: true,
    entities: [Vulnerability],
    migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")]
});
