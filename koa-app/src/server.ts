import * as path from "path";
import Koa from "koa";
import Router from "koa-router";
import Serve from "koa-static";

import route from "./routes/index";

const PORT = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

app.use(Serve(path.join(__dirname, "../public")));

router.use("/", route.routes());
app.use(route.routes());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
