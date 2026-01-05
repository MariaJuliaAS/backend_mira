import { prisma } from "../../prisma/prisma";

interface CommitmentRequest {
    name: string;
    date: string;
    type: string;
    description?: string | null;
    user_id: string;
    course_id?: string | null;
}

class CreateCommitmentService {
    async execute({ name, date, type, description, user_id, course_id }: CommitmentRequest) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const commitment = await prisma.commitment.create({
            data: {
                name,
                date,
                type,
                description: description ?? null,

                user: {
                    connect: { id: user_id }
                },

                ...(course_id && {
                    course: {
                        connect: { id: course_id }
                    }
                })
            }
        });
        return commitment;
    }
}

export { CreateCommitmentService }