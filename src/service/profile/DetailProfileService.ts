import { prisma } from "../../prisma/prisma"


class DetailProfileService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Profile ID is required")
        }

        const profile = await prisma.profile.findUnique({
            where: { id }
        })
        if (!profile) {
            throw new Error("Profile not found")
        }

        return profile;
    }
}

export { DetailProfileService }