import { Request, Response } from "express";
import { DeleteCourseService } from "../../service/course/DeleteCourseService";


class DeleteCourseController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;

        const deleteCourseService = new DeleteCourseService();
        const course = await deleteCourseService.execute(id);

        return res.json(course);
    }
}

export { DeleteCourseController }