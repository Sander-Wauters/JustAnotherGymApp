import Koa from "koa";
import { sequelize } from "./data/index.ts";
import { logger } from "./logger.ts";

const app = new Koa();

sequelize.authenticate();

app.use(async (ctx) => {
  ctx.body = "Hello World!";
});

app.listen(3000);
