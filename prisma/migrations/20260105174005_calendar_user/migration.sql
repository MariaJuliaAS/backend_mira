/*
  Warnings:

  - Added the required column `user_id` to the `Calendars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calendars" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Calendars" ADD CONSTRAINT "Calendars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
