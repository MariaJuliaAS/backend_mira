import { Request, Response } from "express";
import { ListTimerService } from "../../service/timer/ListTimerService";


class ListTimerController {
    async handle(req: Request, res: Response) {
        const { course_id } = req.params;

        const listTimerService = new ListTimerService();
        const timers = await listTimerService.execute(course_id);

        return res.json(timers);
    }
}

export { ListTimerController }