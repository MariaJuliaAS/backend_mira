import { prisma } from "../../prisma/prisma";


class ListTimerService {
    async execute(course_id?: string, goal_id?: string) {
        if (!course_id && !goal_id) {
            throw new Error("Course ID or Goal ID is required");
        }

        const timers = await prisma.timer.findMany({
            where: {
                ...(course_id && {
                    course: {
                        id: course_id
                    }
                }),
                ...(goal_id && {
                    goal: {
                        id: goal_id
                    }
                })
            }
        });

        return timers;
    }
}

export { ListTimerService }