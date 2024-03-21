import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

export const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(String(process.env.DATABASE_PORT)),
  dialect: "mysql",
  dialectModule: mysql2,
  define: {
    timestamps: false
  }
})