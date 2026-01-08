import { Request, Response } from "express";
import { CreateGoalTopicService } from "../../service/goalTopic/CreateGoalTopicService";


class CreateGoalTopicController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const { goal_id } = req.params;

        const createGoalTopicService = new CreateGoalTopicService();
        const goalTopic = await createGoalTopicService.execute({
            name,
            goal_id
        })
        return res.json(goalTopic);
    }
}

export { CreateGoalTopicController }