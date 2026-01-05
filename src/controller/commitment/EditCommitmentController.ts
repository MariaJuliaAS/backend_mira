import { Request, Response } from "express";
import { EditCommitmentService } from "../../service/commitment/EditCommitmentService";


class EditCommitmentController {
    async handle(req: Request, res: Response) {
        const { name, date, type, description, course_id } = req.body;
        const { id } = req.params;

        try {
            const editCommitmentService = new EditCommitmentService();
            const commitment = await editCommitmentService.execute({
                id,
                name,
                date,
                type,
                description: description ?? null,
                course_id: course_id ?? null
            })
            return res.json(commitment);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export { EditCommitmentController }