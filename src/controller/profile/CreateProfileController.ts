import { Request, Response } from "express";
import { CreateProfileService } from "../../service/profile/CreateProfileService";


class CreateProfileController {
    async handle(req: Request, res: Response) {
        const { university, period, program } = req.body;
        const user_id = req.user_id;

        const createProfileService = new CreateProfileService();
        const profile = await createProfileService.execute({
            university,
            period,
            program,
            user_id
        });
        return res.json(profile);
    }
}

export { CreateProfileController }