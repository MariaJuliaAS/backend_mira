import { prisma } from "../../prisma/prisma";

interface CommitmentRequest {
    id: string,
    name: string,
    date: string;
    type: string;
    description?: string | null;
    course_id?: string | null;
}

class EditCommitmentService {
    async execute({ id, name, date, type, description, course_id }: CommitmentRequest) {
        if (!id) {
            throw new Error("Commitment ID is required");
        }

        const commitment = await prisma.commitment.update({
            where: {
                id
            },
            data: {
                name,
                date,
                type,
                description,
                ...(course_id && {
                    course: {
                        connect: {
                            id: course_id
                        }
                    }
                })
            }
        })
        return commitment;
    }
}

export { EditCommitmentService }