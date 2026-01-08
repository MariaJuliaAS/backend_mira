import { prisma } from "../../prisma/prisma";

class DetailUserService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const user = await prisma.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                courses: true,
                goals: true,
                commitments: true,
                profiles: true
            }
        })

        return user;
    }
}

export { DetailUserService }