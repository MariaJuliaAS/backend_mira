import { prisma } from "../../prisma/prisma"


class DetailCourseService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const course = await prisma.course.findFirst({
            where: {
                id
            }
        })

        return course;

    }
}

export { DetailCourseService }