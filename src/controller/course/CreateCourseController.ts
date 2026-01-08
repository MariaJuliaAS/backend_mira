import { Request, Response } from "express";
import { CreateCourseService } from "../../service/course/CreateCourseService";

class CreateCourseController {
    async handle(req: Request, res: Response) {
        const { name, color, teacher } = req.body;
        const user_id = req.user_id;

        const createCourseService = new CreateCourseService();
        const course = await createCourseService.execute({ name, color, teacher, user_id });
        return res.json(course);
    }
}

export { CreateCourseController }