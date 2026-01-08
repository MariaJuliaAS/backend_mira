-- DropForeignKey
ALTER TABLE "Goals" DROP CONSTRAINT "Goals_course_id_fkey";

-- AlterTable
ALTER TABLE "Goals" ALTER COLUMN "course_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
