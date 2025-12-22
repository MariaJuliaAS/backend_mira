import { Request, Response, Router } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.json({ ok: true })
})

export { router };