import { Sequelize } from "sequelize";
import { ENV } from "./env";

export const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
    host: ENV.DB_HOST,
    port: ENV.DB_PORT,
    dialect: "mysql",
    logging: false,
});