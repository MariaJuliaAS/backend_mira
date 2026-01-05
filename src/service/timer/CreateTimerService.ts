import { prisma } from "../../prisma/prisma";

interface TimerRequest {
    course_id: string;
    time: number;
    topic: string;
    pages: number;
    questions: number;
    video: number;

}

class CreateTimerService {
    async execute({ course_id, time, topic, pages, questions, video }: TimerRequest) {
        if (!course_id) {
            throw new Error("Course ID is required");
        }

        if (time < 0) {
            throw new Error("Timer must be a positive number");
        }

        if (pages < 0 || questions < 0 || video < 0) {
            throw new Error("Pages, questions, and video must be positive numbers");
        }

        const clock = await prisma.timer.create({
            data: {
                course: {
                    connect: { id: course_id }
                },
                time,
                topic,
                pages,
                questions,
                video
            }
        })
        return clock;
    }
}

export { CreateTimerService }