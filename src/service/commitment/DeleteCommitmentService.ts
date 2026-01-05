import { prisma } from "../../prisma/prisma";


class DeleteCommitmentService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Commitment ID is required");
        }

        const commitment = await prisma.commitment.delete({
            where: {
                id
            }
        })
        return commitment;
    }
}

export { DeleteCommitmentService }