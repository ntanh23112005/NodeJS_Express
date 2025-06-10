import { prisma } from "../configs/cilent";

const handleCreateUser = async (
    fullName: string,
    email: string,
) => {
    return prisma.user.create({
        data: {
            name: fullName,
            email: email
        }
    });
}

const getAllUser = async () => {
    return prisma.user.findMany();
}

const handleDeleteUser = async (
    id: string
) => {
    return await prisma.user.delete({
        where: { id: +id }
    });
}

const getUserById = async (
    id: string,
) => {
    return await prisma.user.findUnique({
        where: { id: +id }
    });
}

const handleUpdateUser = async (
    id: string,
    name: string,
    email: string
) => {
    return prisma.user.update({
        where: { id: +id },
        data: {
            name: name,
            email: email,
        }
    })
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, handleUpdateUser };