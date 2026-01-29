import { Request, Response } from "express";
import { UptadeGoalTopicService } from "../../service/goalTopic/UptadeGoalTopicService";


class UpdateGoalTopicControllet {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { completed } = req.body;

        const updateGoalTopicService = new UptadeGoalTopicService();
        const goalTopic = await updateGoalTopicService.execute(id, completed);

        return res.json(goalTopic);
    }
}

export { UpdateGoalTopicControllet }