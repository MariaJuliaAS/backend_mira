/*
  Warnings:

  - Made the column `updated_at` on table `Activities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Goals` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Timers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Activities" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Goals" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Timers" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "updated_at" SET NOT NULL;
