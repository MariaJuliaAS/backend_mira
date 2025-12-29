import { Request, Response } from "express";
import { ListGoalService } from "../../service/goal/ListGoalService";


class ListGoalController {
    async handle(req: Request, res: Response) {
        const { course_id } = req.params;

        const listGoalService = new ListGoalService();
        const goals = await listGoalService.execute(course_id);

        return res.json(goals);
    }
}

export { ListGoalController }