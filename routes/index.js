const router = require("koa-router")();
const { v4: uuidv4 } = require("uuid");
const models = require("../models/index");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const moment = require("moment");
const dayjs = require("dayjs");

router.get("/", async (ctx, next) => {
  let res = await models.tags_model.findAll();
  await ctx.render("index", {
    title: "Hello Koa 2!",
    list: res,
  });
});

router.get("/string", async (ctx, next) => {
  // const jane = await prisma.tags.create({
  //   data: {
  //     entity_id: uuidv4(),
  //     entity_name: "Jane",
  //     tags: ["Doe", "aas"],
  //   },
  // });
  // console.log("jane", jane);

  // let res = await prisma.user.update({
  //   data: {
  //     username: "bailong",
  //     password: "bailong",
  //     create_at: dayjs(),
  //   },
  //   where: { id: 1 },
  // });
  // console.log("res", res);

  const allUsers = await prisma.user.findMany({
    skip: 0, //从skip开始（不包含skip）
    take: 20, //取几条
    //下面这句话表示将与user表关联的表也查询出来
    include: { book: true },
  });

  ctx.body = allUsers;
});

router.get("/json", async (ctx, next) => {
  console.log(
    "process.env.NODE_ENV2",
    process.env.NODE_ENV,
    process.env.MONGOOSE_URL,
    process.env.DATABASE_URL
  );
  let page = 2;
  let pageSize = 2;
  const offset = (page - 1) * pageSize;
  let res = await models.tags_model.findAll({
    limit: pageSize,
    offset: offset,
  });
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
