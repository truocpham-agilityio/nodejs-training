import { Context } from "koa";
import Router from "koa-router";

const route = new Router();

route.get("/", async (ctx: Context) => {
  const title = "Koa.js";
  ctx.body = `
    <html>
        <head>
        <title> ${title} </title>
        <link rel="stylesheet" href="styles.css"></head>
        <body>
            <h1> ${title} </h1>
            <p> Welcome to ${title} </p>
        </body>
    </html>
    `;
});

export default route;
