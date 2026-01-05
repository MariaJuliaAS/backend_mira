import { prisma } from "../../prisma/prisma";

interface CourseRequest {
    name: string;
    color: string;
    user_id: string;
}

class CreateCourseService {
    async execute({ name, color, user_id }: CourseRequest) {
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
                color,
                user: {
                    connect: { id: user_id }
                }
            }
        })

        return course;
    }
}

export { CreateCourseService }