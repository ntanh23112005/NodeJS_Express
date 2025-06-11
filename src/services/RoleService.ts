import { prisma } from "../configs/cilent"

const getAllRole = async () => {
    return prisma.role.findMany();
}

export { getAllRole }