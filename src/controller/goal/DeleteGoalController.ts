import { Request, Response } from "express";
import { DeleteGoalService } from "../../service/goal/DeleteGoalService";

class DeleteGoalController {
    async handle(req: Request, res: Response) {
        const { goal_id } = req.params;

        const deleteGoalService = new DeleteGoalService();
        const goal = await deleteGoalService.execute(goal_id);

        return res.json(goal);
    }
}

export { DeleteGoalController }