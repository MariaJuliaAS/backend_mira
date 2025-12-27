import { prisma } from "../../prisma/prisma"


class DeleteCourseService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const course = await prisma.course.delete({
            where: {
                id
            }
        })

        return course;
    }
}

export { DeleteCourseService }