import { prisma } from "../../prisma/prisma"


class DeleteGoalTopicService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Goal Topic ID incorrect")
        }

        const goalTopicExists = await prisma.goalTopic.findFirst({
            where: {
                id: id
            }
        })
        if (!goalTopicExists) {
            throw new Error("Goal Topic does not exists")
        }

        const goalTopic = await prisma.goalTopic.delete({
            where: {
                id: id
            }
        })

        return goalTopic;
    }
}

export { DeleteGoalTopicService }