import { Request, Response } from "express";
import { DetailCommitmentService } from "../../service/commitment/DetailCommitmentService";


class DetailCommitmentController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;

        const detailCommitmentController = new DetailCommitmentService();
        const commitment = await detailCommitmentController.execute(id);

        return res.json(commitment);

    }
}

export { DetailCommitmentController }