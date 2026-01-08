import { prisma } from "../../prisma/prisma"


class ListGoalService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("The user id is required")
        }

        const goals = await prisma.goal.findMany({
            where: {
                user: {
                    id: user_id
                }
            }
        })
        return goals;
    }
}

export { ListGoalService }