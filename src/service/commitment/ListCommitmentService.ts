import { prisma } from "../../prisma/prisma";


class ListCommitmentService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const commitment = await prisma.commitment.findMany({
            where: {
                user: {
                    id: user_id
                }
            }
        })
        return commitment;
    }
}

export { ListCommitmentService }