-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR,
    "password" VARCHAR,
    "create_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "num" BIGINT,

    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "userid" INTEGER,
    "create_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "cateid" INTEGER,

    CONSTRAINT "book_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cate" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(355),
    "desc" VARCHAR(255),
    "create_at" TIMESTAMPTZ(6),

    CONSTRAINT "cate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_cate_fk" FOREIGN KEY ("cateid") REFERENCES "cate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_fk" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
