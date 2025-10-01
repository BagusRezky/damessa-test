import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    DB_HOST: process.env.DB_HOST ?? "localhost",
    DB_NAME: process.env.DB_NAME ?? "damessa_db",
    DB_USER: process.env.DB_USER ?? "root",
    DB_PASS: process.env.DB_PASS ?? "",
    DB_PORT: Number(process.env.DB_PORT ?? 3000),
    JWT_SECRET: process.env.JWT_SECRET ?? "rhs",
    PORT: process.env.PORT ?? 3000,
}