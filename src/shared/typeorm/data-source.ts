import { DataSource } from "typeorm";
import path from "path";
import Product from "@modules/products/typeorm/entities/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apivulns",
    synchronize: false,
    logging: true,
    entities: [Product],
    migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")]
});
