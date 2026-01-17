import { prisma } from "../../prisma/prisma";

interface CourseRequest {
    id: string;
    name: string;
    teacher?: string;
}

class UpdateCourseService {
    async execute({ id, name, teacher }: CourseRequest) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const courseExists = await prisma.course.findFirst({
            where: { id }
        })
        if (!courseExists) {
            throw new Error("Course not found")
        }

        const course = await prisma.course.update({
            where: {
                id
            },
            data: {
                name,
                teacher
            }
        })

        return course;
    }
}

export { UpdateCourseService }