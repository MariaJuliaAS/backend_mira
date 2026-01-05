import { Request, Response } from "express";
import { CreateCommitmentService } from "../../service/commitment/CreateCommitmentService";

class CreateCommitmentController {
    async handle(req: Request, res: Response) {
        const { name, date, type, description, course_id } = req.body;
        const user_id = req.user_id;

        const createCommitmentService = new CreateCommitmentService();
        const commitment = await createCommitmentService.execute({
            name,
            date,
            type,
            description: description ?? null,
            user_id,
            course_id: course_id ?? null
        })
        return res.json(commitment);
    }
}

export { CreateCommitmentController }