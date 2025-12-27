import { prisma } from "../../prisma/prisma";

interface CourseRequest {
    id: string;
    name: string;
    color: string;
}

class UpdateCourseService {
    async execute({ id, name, color }: CourseRequest) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const course = await prisma.course.update({
            where: {
                id
            },
            data: {
                name,
                color
            }
        })

        return course;
    }
}

export { UpdateCourseService }