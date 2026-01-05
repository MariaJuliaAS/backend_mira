import { prisma } from "../../prisma/prisma";

interface GoalRequest {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    course_id: string;
}

class CreateGoalService {
    async execute({ name, description, start_date, end_date, course_id }: GoalRequest) {
        if (!course_id) {
            throw new Error("The course id is required")
        }

        const goal = await prisma.goal.create({
            data: {
                name,
                description,
                start_date,
                end_date,
                course: {
                    connect: { id: course_id }
                }
            }
        })

        return goal;

    }
}

export { CreateGoalService }