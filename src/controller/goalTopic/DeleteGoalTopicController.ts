import { Request, Response } from "express";
import { DeleteGoalTopicService } from "../../service/goalTopic/DeleteGoalTopicService";


class DeleteGoalTopicController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteGoalTopicService = new DeleteGoalTopicService();
        const goalTopic = await deleteGoalTopicService.execute(id);

        return res.json(goalTopic);
    }
}

export { DeleteGoalTopicController }