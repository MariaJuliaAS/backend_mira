import { prisma } from "../../prisma/prisma";

interface ProfileRequest {
    university?: string;
    period?: number;
    program?: string;
    id: string;
}

class EditProfileService {
    async execute({ university, period, program, id }: ProfileRequest) {
        if (!id) {
            throw new Error("Profile ID is required")
        }

        const profileExists = await prisma.profile.findUnique({
            where: { id }
        })
        if (!profileExists) {
            throw new Error("Profile not found")
        }

        const profile = await prisma.profile.update({
            where: { id },
            data: {
                university,
                period,
                program
            }
        })
        return profile;
    }
}

export { EditProfileService }