import { prisma } from "../../prisma/prisma";

interface ProfileRequest {
    university?: string;
    period?: number;
    program?: string;
    user_id: string;
}

class CreateProfileService {
    async execute({ university, period, program, user_id }: ProfileRequest) {
        if (!user_id) {
            throw new Error("User ID is required")
        }

        const profileAlreadyExists = await prisma.profile.findFirst({
            where: { user_id }
        })
        if (profileAlreadyExists) {
            throw new Error("Profile already exists for this user")
        }

        const profile = await prisma.profile.create({
            data: {
                university,
                period,
                program,
                user: {
                    connect: { id: user_id }
                }
            }
        })
        return profile;
    }
}

export { CreateProfileService }