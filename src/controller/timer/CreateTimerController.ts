import { Request, Response } from "express";
import { CreateTimerService } from "../../service/timer/CreateTimerService";


class CreateTimerController {
    async handle(req: Request, res: Response) {
        const { time, topic, pages, questions, correctQuestions, video, revision } = req.body;
        const { course_id } = req.params;
        const { goal_id } = req.params;

        const createTimerService = new CreateTimerService();
        const timer = await createTimerService.execute({
            course_id: course_id ?? null,
            goal_id,
            time,
            topic,
            pages,
            questions,
            correctQuestions,
            video,
            revision
        });
        return res.json(timer);
    }
}

export { CreateTimerController }