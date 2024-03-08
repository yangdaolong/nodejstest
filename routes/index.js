const router = require("koa-router")();
const { v4: uuidv4 } = require("uuid");

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
    console.log(
    "process.env.NODE_ENV2",
    process.env.NODE_ENV,
    process.env.MONGOOSE_URL,
    process.env.DATABASE_URL
  );
  try {
    let user = await prisma.$transaction(async (prisma) => {
      let res = await prisma.user.update({
        data: {
          username: "bailong",
          password: "bailong",
          create_at: dayjs(),
        },
        where: { id: 1 },
      });

      throw new Error(`Oh no! ${res} is all booked.`);
    });
  } catch (error) {
    // console.log(error);
  }

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

  const allUsers = await prisma.book.findMany({
    skip: 0, //从skip开始（不包含skip）
    take: 20, //取几条
    //下面这句话表示将与user表关联的表也查询出来
    include: { user: true,cate:true },
  });

  // const allUsers =
  //   await prisma.$queryRaw`select book.id,* from book left join public.user on userid =public.user.id`;
  ctx.body = allUsers;
});

router.get("/json", async (ctx, next) => {
  console.log(
    "process.env.NODE_ENV2",
    process.env.NODE_ENV,
    process.env.MONGOOSE_URL,
    process.env.DATABASE_URL
  );

  const allUsers = await prisma.cate.findMany({
      include: { book: true},
    })


  ctx.body = allUsers;
});

module.exports = router;
