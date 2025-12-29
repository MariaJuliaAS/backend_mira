import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCourseController } from "./controller/course/CreateCourseController";
import { UpdateCourseController } from "./controller/course/UpdateCourseController";
import { DeleteCourseController } from "./controller/course/DeleteCourseController";
import { ListCourseController } from "./controller/course/ListCourseController";
import { DetailCourseController } from "./controller/course/DetailCourseController";
import { CreateGoalController } from "./controller/goal/CreateGoalController";
import { DeleteGoalController } from "./controller/goal/DeleteGoalController";

const router = Router();

router.post("/user", new CreateUserController().handle)
router.post("/user/login", new AuthUserController().handle)

router.post("/course", isAuthenticated, new CreateCourseController().handle)
router.put("/course/:id", isAuthenticated, new UpdateCourseController().handle)
router.delete("/course/:id", isAuthenticated, new DeleteCourseController().handle)
router.get("/course/all", isAuthenticated, new ListCourseController().handle)
router.get("/course/:id", isAuthenticated, new DetailCourseController().handle)

router.post("/goal/:course_id", isAuthenticated, new CreateGoalController().handle)
router.delete("/goal/:goal_id", isAuthenticated, new DeleteGoalController().handle)

export { router };