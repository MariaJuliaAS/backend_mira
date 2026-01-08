import { prisma } from "../../prisma/prisma";

interface GoalRequest {
    name: string;
    description: string;
    end_date: string;
    course_id?: string;
    user_id: string;
}

class CreateGoalService {
    async execute({ name, description, end_date, course_id, user_id }: GoalRequest) {
        if (!user_id) {
            throw new Error("The user id is required")
        }

        const goal = await prisma.goal.create({
            data: {
                name,
                description,
                end_date,
                ...(course_id && {
                    course: {
                        connect: { id: course_id }
                    }
                }),
                user: {
                    connect: { id: user_id }
                }
            }
        })

        return goal;

    }
}

export { CreateGoalService }