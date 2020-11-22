const mysql = require("mysql");

const connection = async () => {
  try {
    const connection = mysql.createConnection({
      host: "",
      user: "",
      password: "",
      database: "",
    });
    console.log("Banco de dados conectado!!!!");
    return connection;
  } catch (error) {
    console.log("Erro no banco de dados!!!!");
    // throw new Error(error.message);
  }
};
module.exports = connection;
