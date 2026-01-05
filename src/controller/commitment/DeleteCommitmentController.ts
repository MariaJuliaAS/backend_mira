import { Request, Response } from "express";
import { DeleteCommitmentService } from "../../service/commitment/DeleteCommitmentService";


class DeleteCommitmentController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteCommitmentService = new DeleteCommitmentService();
        const commitment = await deleteCommitmentService.execute(id);

        return res.json(commitment);
    }
}

export { DeleteCommitmentController }