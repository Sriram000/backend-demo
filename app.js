const express = require("express");
const indexRouter = require("./router/index");

const app = express();
const PORT = 5000;

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server listening to ${PORT}`))