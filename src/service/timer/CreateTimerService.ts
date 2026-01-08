import { prisma } from "../../prisma/prisma";

interface TimerRequest {
    course_id?: string;
    goal_id?: string;
    time: number;
    topic: string;
    pages?: number;
    questions?: number;
    correctQuestions?: number;
    video?: number;

}

class CreateTimerService {
    async execute({ course_id, goal_id, time, topic, pages, questions, correctQuestions, video }: TimerRequest) {
        if (!course_id && !goal_id) {
            throw new Error("Course ID or Goal ID is required");
        }

        if (time < 0) {
            throw new Error("Timer must be a positive number");
        }

        if (pages && pages < 0 || questions && questions < 0 || video && video < 0 || correctQuestions && correctQuestions < 0) {
            throw new Error("Pages, questions, correctQuestions, and video must be positive numbers");
        }

        const clock = await prisma.timer.create({
            data: {
                ...(course_id && {
                    course: {
                        connect: { id: course_id }
                    }
                }),
                ...(goal_id && {
                    goal: {
                        connect: { id: goal_id }
                    }
                }),
                time,
                topic,
                pages: pages ?? 0,
                questions: questions ?? 0,
                correctQuestions: correctQuestions ?? 0,
                video: video ?? 0
            }
        })
        return clock;
    }
}

export { CreateTimerService }