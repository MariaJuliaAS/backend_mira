import { prisma } from "../../prisma/prisma"


class ListGoalService {
    async execute(course_id: string) {
        if (!course_id) {
            throw new Error("The course id is required")
        }

        const goals = await prisma.goal.findMany({
            where: {
                course_id
            }
        })
        return goals;
    }
}

export { ListGoalService }