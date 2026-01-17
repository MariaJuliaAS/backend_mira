-- DropForeignKey
ALTER TABLE "Commitments" DROP CONSTRAINT "Commitments_course_id_fkey";

-- DropForeignKey
ALTER TABLE "GoalTopics" DROP CONSTRAINT "GoalTopics_goal_id_fkey";

-- DropForeignKey
ALTER TABLE "Goals" DROP CONSTRAINT "Goals_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Timers" DROP CONSTRAINT "Timers_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Timers" DROP CONSTRAINT "Timers_goal_id_fkey";

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoalTopics" ADD CONSTRAINT "GoalTopics_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "Goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commitments" ADD CONSTRAINT "Commitments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timers" ADD CONSTRAINT "Timers_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timers" ADD CONSTRAINT "Timers_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "Goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;
