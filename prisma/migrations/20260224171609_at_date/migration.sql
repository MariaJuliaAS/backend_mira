/*
  Warnings:

  - Changed the type of `end_date` on the `Goals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Goals" DROP COLUMN "end_date",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL;
