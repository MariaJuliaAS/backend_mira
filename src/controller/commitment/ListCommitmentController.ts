import { Request, Response } from "express";
import { ListCommitmentService } from "../../service/commitment/ListCommitmentService";


class ListCommitmentController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        try {
            const listCommitmentService = new ListCommitmentService();
            const commitment = await listCommitmentService.execute(user_id)
            return res.json(commitment);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export { ListCommitmentController }