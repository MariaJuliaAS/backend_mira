import { prisma } from "../../prisma/prisma"


class ListAllTimerService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const timers = await prisma.timer.findMany({
            include: {
                course: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                goal: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        return timers;
    }
}

export { ListAllTimerService }