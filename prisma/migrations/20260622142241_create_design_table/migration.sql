-- CreateEnum
CREATE TYPE "public"."DesignCategory" AS ENUM ('PACKING_BOX', 'PACKING_BOX_DESIGN');

-- CreateTable
CREATE TABLE "public"."Design" (
    "id" TEXT NOT NULL,
    "designName" TEXT NOT NULL,
    "category" "public"."DesignCategory" NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);
