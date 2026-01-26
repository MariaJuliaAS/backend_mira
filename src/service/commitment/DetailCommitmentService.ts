import { prisma } from "../../prisma/prisma";


class DetailCommitmentService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Id not found or inexistent")
        }

        const commitment = await prisma.commitment.findFirst({
            where: {
                id
            }
        })

        return commitment;
    }
}

export { DetailCommitmentService }