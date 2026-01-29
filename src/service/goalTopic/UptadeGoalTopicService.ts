import { prisma } from "../../prisma/prisma"


class UptadeGoalTopicService {
    async execute(id: string, completed: boolean) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const goalTopicExists = await prisma.goalTopic.findFirst({
            where: { id }
        })
        if (!goalTopicExists) {
            throw new Error("Goal topic not found")
        }

        const goalTopic = await prisma.goalTopic.update({
            where: {
                id
            },
            data: {
                completed
            }
        })

        return goalTopic;
    }
}

export { UptadeGoalTopicService }