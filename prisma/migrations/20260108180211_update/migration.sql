-- DropForeignKey
ALTER TABLE "Timers" DROP CONSTRAINT "Timers_course_id_fkey";

-- AlterTable
ALTER TABLE "Timers" ADD COLUMN     "goal_id" TEXT,
ALTER COLUMN "course_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Timers" ADD CONSTRAINT "Timers_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timers" ADD CONSTRAINT "Timers_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "Goals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
