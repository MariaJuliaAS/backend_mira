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
import { ListGoalController } from "./controller/goal/ListGoalController";
import { CreateTimerController } from "./controller/timer/CreateTimerController";
import { EditTimerController } from "./controller/timer/EditTimerController";
import { DeleteTimerController } from "./controller/timer/DeleteTimerController";
import { ListTimerController } from "./controller/timer/ListTimerController";
import { CreateCommitmentController } from "./controller/commitment/CreateCommitmentController";
import { DeleteCommitmentController } from "./controller/commitment/DeleteCommitmentController";
import { ListCommitmentController } from "./controller/commitment/ListCommitmentController";
import { EditCommitmentController } from "./controller/commitment/EditCommitmentController";
import { CreateProfileController } from "./controller/profile/CreateProfileController";
import { EditProfileController } from "./controller/profile/EditProfileController";

const router = Router();

router.post("/user", new CreateUserController().handle)
router.post("/user/login", new AuthUserController().handle)

router.post("/profile", isAuthenticated, new CreateProfileController().handle)
router.put("/profile/:id", isAuthenticated, new EditProfileController().handle)

router.post("/course", isAuthenticated, new CreateCourseController().handle)
router.put("/course/:id", isAuthenticated, new UpdateCourseController().handle)
router.delete("/course/:id", isAuthenticated, new DeleteCourseController().handle)
router.get("/course/all", isAuthenticated, new ListCourseController().handle)
router.get("/course/:id", isAuthenticated, new DetailCourseController().handle)

router.post("/goal/:course_id", isAuthenticated, new CreateGoalController().handle)
router.delete("/goal/:goal_id", isAuthenticated, new DeleteGoalController().handle)
router.get("/goal/:course_id", isAuthenticated, new ListGoalController().handle)

router.post("/timer/:course_id", isAuthenticated, new CreateTimerController().handle)
router.put("/timer/:id", isAuthenticated, new EditTimerController().handle)
router.delete("/timer/:id", isAuthenticated, new DeleteTimerController().handle)
router.get("/timer/:course_id", isAuthenticated, new ListTimerController().handle)

router.post("/commitment", isAuthenticated, new CreateCommitmentController().handle)
router.delete("/commitment/:id", isAuthenticated, new DeleteCommitmentController().handle)
router.get("/commitment", isAuthenticated, new ListCommitmentController().handle)
router.put("/commitment/:id", isAuthenticated, new EditCommitmentController().handle)

export { router };