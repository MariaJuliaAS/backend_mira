import { Request, Response } from "express";
import { CreateGoalService } from "../../service/goal/CreateGoalService";


class CreateGoalController {
    async handle(req: Request, res: Response) {
        const { name, description, start_date, end_date } = req.body;
        const { course_id } = req.params;

        const createGoalService = new CreateGoalService();
        const goal = await createGoalService.execute({ name, description, start_date, end_date, course_id });

        return res.json(goal);
    }
}

export { CreateGoalController }