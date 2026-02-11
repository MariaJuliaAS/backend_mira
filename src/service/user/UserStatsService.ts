import { prisma } from "../../prisma/prisma";


class UserStatsService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const totalStudyTime = await prisma.timer.aggregate({
            where: { user: { id: user_id } },
            _sum: { time: true }
        })

        const activeGoals = await prisma.goal.count({
            where: { user: { id: user_id } },
        })

        const activeCourses = await prisma.course.count({
            where: { user: { id: user_id } }
        })

        return {
            totalStudyTime: totalStudyTime._sum || 0,
            activeGoals,
            activeCourses
        }
    }
}

export { UserStatsService }