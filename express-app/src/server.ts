import express from "express";
import * as path from "path";
import router from "./routes/index";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
