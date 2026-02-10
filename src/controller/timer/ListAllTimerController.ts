import { Request, Response } from "express";
import { ListAllTimerService } from "../../service/timer/ListAllTimerService";


class ListAllTimerController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const listAllTimerService = new ListAllTimerService();
        const timer = await listAllTimerService.execute(user_id);
        return res.json(timer);

    }
}

export { ListAllTimerController }