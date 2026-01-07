/*
  Warnings:

  - You are about to drop the column `period` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `program` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `university` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "period",
DROP COLUMN "program",
DROP COLUMN "university";

-- CreateTable
CREATE TABLE "Profiles" (
    "id" TEXT NOT NULL,
    "university" TEXT,
    "period" INTEGER,
    "program" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
