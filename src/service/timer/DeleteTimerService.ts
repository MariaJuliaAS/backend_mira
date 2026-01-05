import { prisma } from "../../prisma/prisma";


class DeleteTimerService {
    async execute(id: string) {
        if (!id) {
            throw new Error("Timer ID is required");
        }

        const timer = await prisma.timer.delete({
            where: {
                id
            }
        })
        return timer;
    }
}

export { DeleteTimerService }