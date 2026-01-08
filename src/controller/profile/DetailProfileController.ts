import { Request, Response } from "express";
import { DetailProfileService } from "../../service/profile/DetailProfileService";


class DetailProfileController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const detailProfileService = new DetailProfileService();
        const profile = await detailProfileService.execute(id);

        return res.json(profile);
    }
}

export { DetailProfileController }