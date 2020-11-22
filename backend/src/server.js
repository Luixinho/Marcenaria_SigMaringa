const express = require("express");
const app = express();
const connection = require("./config/mysql");

app.use(require("./config/routes"));

const init = async () => {
  const a = await connection();
  console.log(a);
  await app.listen(3333, () => console.log("Servidor aberto!!!!!"));
};
init();

// const name = functionName();

// _, (b = functionName());
