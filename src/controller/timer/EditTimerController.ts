import { Request, Response } from "express";
import { EditTimerService } from "../../service/timer/EditTimerService";

class EditTimerController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { topic, pages, questions, correctQuestions, video, revision } = req.body;

        const editTimerService = new EditTimerService();
        const timer = await editTimerService.execute({ id, topic, pages, questions, correctQuestions, video, revision });

        return res.json(timer);
    }
}

export { EditTimerController }