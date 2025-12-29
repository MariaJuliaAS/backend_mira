import { prisma } from "../../prisma/prisma"


class DeleteGoalService {
    async execute(goal_id: string) {
        if (!goal_id) {
            throw new Error("The course id is required")
        }

        const goal = await prisma.goal.delete({
            where: {
                id: goal_id
            }
        })
        return goal;
    }
}

export { DeleteGoalService }