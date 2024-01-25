const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// const sequelize = new Sequelize("postgres://kong:kong@localhost:5432/kong"); // Postgres 示例
const sequelize = new Sequelize("kong", "kong", "kong", {
  host: "localhost",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  define: {
    timestamps: false,
  },
});

const db = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    // console.log("file", file);

    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// console.log("db", db);
module.exports = db;
