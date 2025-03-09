import { Sequelize } from "sequelize";
import { logger } from "../logger";

export const sequelize = new Sequelize(
  process.env.DB!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    logging: (msg) => logger.debug(msg),
  }
);
