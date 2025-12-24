import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split('');

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("JWT_SECRET undefined")
    }

    try {
        const { sub } = jwt.verify(token, jwtSecret) as Payload;
        req.user_id = sub;
        return next();
    } catch (err) {
        return res.status(401).end()
    }

}