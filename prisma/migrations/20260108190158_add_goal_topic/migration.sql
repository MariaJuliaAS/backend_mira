-- CreateTable
CREATE TABLE "GoalTopics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "goal_id" TEXT NOT NULL,

    CONSTRAINT "GoalTopics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GoalTopics" ADD CONSTRAINT "GoalTopics_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "Goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
