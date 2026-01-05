-- DropForeignKey
ALTER TABLE "Commitments" DROP CONSTRAINT "Commitments_course_id_fkey";

-- AlterTable
ALTER TABLE "Commitments" ALTER COLUMN "course_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Commitments" ADD CONSTRAINT "Commitments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
