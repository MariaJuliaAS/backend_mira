/*
  Warnings:

  - You are about to drop the `Activities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_course_id_fkey";

-- DropTable
DROP TABLE "Activities";

-- CreateTable
CREATE TABLE "Calendars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "course_id" TEXT NOT NULL,

    CONSTRAINT "Calendars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calendars" ADD CONSTRAINT "Calendars_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
