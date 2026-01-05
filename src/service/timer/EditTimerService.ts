import { prisma } from "../../prisma/prisma";

interface TimerRequest {
    id: string;
    topic: string;
    pages: number;
    questions: number;
    video: number;
}

class EditTimerService {
    async execute({ id, topic, pages, questions, video }: TimerRequest) {
        if (!id) {
            throw new Error("Timer ID is required");
        }

        if (pages < 0 || questions < 0 || video < 0) {
            throw new Error("Pages, questions, and video must be positive numbers");
        }

        const timer = await prisma.timer.update({
            where: { id },
            data: {
                topic,
                pages,
                questions,
                video
            }
        })

        return timer;
    }
}

export { EditTimerService }