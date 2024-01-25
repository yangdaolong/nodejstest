const router = require("koa-router")();
const { v4: uuidv4 } = require("uuid");

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

const tags = require("../models/tags")(sequelize);

router.get("/", async (ctx, next) => {
  let res = await tags.findAll();
  await ctx.render("index", {
    title: "Hello Koa 2!",
    list: res,
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  console.log(
    "process.env.NODE_ENV2",
    process.env.NODE_ENV,
    process.env.MONGOOSE_URL
  );
  let res = await tags.findAll();
  // console.log(res);
  // 创建一个新用户
  // const jane = await tags.create({
  //   entity_id: uuidv4(),
  //   entity_name: "Jane",
  //   tags: ["Doe", "aas"],
  // });
  // console.log("Jane's auto-generated ID:", jane.id);

  // let tag = await tags.findByPk("8502fd81-91b9-4f94-ae96-64a1e6ebfd6a");
  // tag.entity_name = "long";
  // let jane = await tag.save();

  ctx.body = res;
});

module.exports = router;
