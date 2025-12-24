import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCourseController } from "./controller/course/CreateCourseController";

const router = Router();

router.post("/user", new CreateUserController().handle)
router.post("/user/login", new AuthUserController().handle)

router.post("/course", isAuthenticated, new CreateCourseController().handle)

export { router };