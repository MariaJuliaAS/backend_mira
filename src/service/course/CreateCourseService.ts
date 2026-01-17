import { prisma } from "../../prisma/prisma";

interface CourseRequest {
    name: string;
    teacher?: string;
    user_id: string;
}

class CreateCourseService {
    async execute({ name, teacher, user_id }: CourseRequest) {
        if (!user_id) {
            throw new Error("The user id is required")
        }

        const courseAlreadyExists = await prisma.course.findFirst({
            where: {
                name
            }
        })
        if (courseAlreadyExists) {
            throw new Error("Course already exists")
        }

        const course = await prisma.course.create({
            data: {
                name,
                teacher: teacher ?? null,
                user: {
                    connect: { id: user_id }
                }
            }
        })

        return course;
    }
}

export { CreateCourseService }