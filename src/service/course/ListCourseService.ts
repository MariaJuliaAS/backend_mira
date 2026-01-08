import { prisma } from "../../prisma/prisma"

class ListCourseService {
    async execute(user_id: string) {

        if (!user_id) {
            throw new Error("User ID not found or inexistent")
        }

        const courses = await prisma.course.findMany({
            where: {
                user: {
                    id: user_id
                }
            },
            include: {
                goals: true,
                commitments: true,
                timers: true
            }
        })
        return courses;
    }
}

export { ListCourseService }