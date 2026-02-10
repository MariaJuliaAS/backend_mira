import { prisma } from "../../prisma/prisma"


class ListAllTimerService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const timers = await prisma.timer.findMany({
            where: {
                user: {
                    id: user_id
                }
            },
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
            },
            orderBy: {
                updated_at: "desc"
            }
        })
        return timers;
    }
}

export { ListAllTimerService }