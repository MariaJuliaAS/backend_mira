import { Request, Response } from "express";
import { CreateGoalService } from "../../service/goal/CreateGoalService";


class CreateGoalController {
    async handle(req: Request, res: Response) {
        const { name, description, end_date } = req.body;
        const { course_id } = req.params;
        const user_id = req.user_id;

        const createGoalService = new CreateGoalService();
        const goal = await createGoalService.execute({ name, description, end_date, course_id, user_id });

        return res.json(goal);
    }
}

export { CreateGoalController }