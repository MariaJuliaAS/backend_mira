import { Request, Response } from "express";
import { DetailCourseService } from "../../service/course/DetailCourseService";


class DetailCourseController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const detailCourseService = new DetailCourseService();
        const course = await detailCourseService.execute(id);

        return res.json(course);
    }
}

export { DetailCourseController }