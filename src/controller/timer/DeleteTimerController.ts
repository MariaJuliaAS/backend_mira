import { Request, Response } from "express";
import { DeleteTimerService } from "../../service/timer/DeleteTimerService";

class DeleteTimerController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteTimerService = new DeleteTimerService();
        const timer = await deleteTimerService.execute(id);

        return res.json(timer);
    }
}

export { DeleteTimerController }