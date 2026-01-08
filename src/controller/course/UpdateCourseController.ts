import { Request, Response } from "express";
import { UpdateCourseService } from "../../service/course/UpdateCourseService";

class UpdateCourseController {
    async handle(req: Request, res: Response) {
        const { name, color, teacher } = req.body;
        const id = req.params.id;

        const updateCourseService = new UpdateCourseService();
        const course = await updateCourseService.execute({ id, name, color, teacher })
        return res.json(course);
    }
}

export { UpdateCourseController }