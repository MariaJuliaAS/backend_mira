import { Request, Response } from "express";
import { EditProfileService } from "../../service/profile/EditProfileService";


class EditProfileController {
    async handle(req: Request, res: Response) {
        const { university, period, program } = req.body;
        const { id } = req.params;

        const editProfileService = new EditProfileService();
        const profile = await editProfileService.execute({ university, period, program, id });

        return res.json(profile);
    }
}

export { EditProfileController }