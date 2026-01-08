import { Request, Response } from "express";
import { ListGoalService } from "../../service/goal/ListGoalService";


class ListGoalController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const listGoalService = new ListGoalService();
        const goals = await listGoalService.execute(user_id);

        return res.json(goals);
    }
}

export { ListGoalController }