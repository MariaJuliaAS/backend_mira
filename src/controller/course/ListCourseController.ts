import { Request, Response } from "express";
import { ListCourseService } from "../../service/course/ListCourseService";


class ListCourseController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const listCourseService = new ListCourseService();
        const courses = await listCourseService.execute(user_id);

        return res.json(courses)
    }
}

export { ListCourseController }