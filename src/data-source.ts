import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const db = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1212",
    database: "pet",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
