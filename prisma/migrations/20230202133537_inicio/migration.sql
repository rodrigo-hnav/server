-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "descripcion" TEXT,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
