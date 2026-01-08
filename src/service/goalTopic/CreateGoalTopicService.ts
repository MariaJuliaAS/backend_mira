import { prisma } from "../../prisma/prisma";

interface GoalTopicRequest {
    name: string;
    goal_id: string;
}

class CreateGoalTopicService {
    async execute({ name, goal_id }: GoalTopicRequest) {
        if (!goal_id) {
            throw new Error("Goal ID incorrect")
        }

        const goalTopicExists = await prisma.goalTopic.findFirst({
            where: {
                name
            }
        })
        if (goalTopicExists) {
            throw new Error("Goal Topic already exists")
        }

        const goalTopic = await prisma.goalTopic.create({
            data: {
                name,
                goal: {
                    connect: {
                        id: goal_id
                    }
                }
            }
        })
        return goalTopic;
    }
}

export { CreateGoalTopicService }