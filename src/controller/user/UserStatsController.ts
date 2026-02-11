import { Request, Response } from "express";
import { UserStatsService } from "../../service/user/UserStatsService";


class UserStatsController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const userStatsService = new UserStatsService();
        const stats = await userStatsService.execute(user_id);

        return res.json(stats);

    }
}

export { UserStatsController }