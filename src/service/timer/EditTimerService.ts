import { prisma } from "../../prisma/prisma";

interface TimerRequest {
    id: string;
    topic: string;
    pages?: number;
    questions?: number;
    correctQuestions?: number;
    video?: number;
}

class EditTimerService {
    async execute({ id, topic, pages, questions, correctQuestions, video }: TimerRequest) {
        if (!id) {
            throw new Error("Timer ID is required");
        }

        if (pages && pages < 0 || questions && questions < 0 || video && video < 0 || correctQuestions && correctQuestions < 0) {
            throw new Error("Pages, questions, correctQuestions, and video must be positive numbers");
        }

        const timer = await prisma.timer.update({
            where: { id },
            data: {
                topic,
                pages: pages ?? 0,
                questions: questions ?? 0,
                correctQuestions: correctQuestions ?? 0,
                video: video ?? 0
            }
        })

        return timer;
    }
}

export { EditTimerService }