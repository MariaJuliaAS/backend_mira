import { compare } from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import jwt from "jsonwebtoken";

interface AuthUserRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthUserRequest) {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET undefined")
        }
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            },
            jwtSecret,
            {
                subject: user.id,
                expiresIn: '15d'
            }
        )

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }
}

export { AuthUserService }