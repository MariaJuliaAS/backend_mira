import { prisma } from "../../prisma/prisma";


class ListTimerService {
    async execute(course_id: string) {
        if (!course_id) {
            throw new Error("Course ID is required");
        }

        const timers = await prisma.timer.findMany({
            where: {
                course_id
            }
        });

        return timers;
    }
}

export { ListTimerService }