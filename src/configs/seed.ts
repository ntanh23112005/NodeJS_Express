import { prisma } from "./cilent"

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                { name: 'Bobo', email: 'bob@prisma.io' },
                { name: 'Yewande', email: 'yewande@prisma.io' },
                { name: 'Angelique', email: 'angelique@prisma.io' },
            ],
            skipDuplicates: true, //skip duplicate if exits
        })
    } else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                { id: 1, name: "ADMIN", description: "Toàn bộ quyền" },
                { id: 2, name: "USER", description: "Hạn chế quyền" }
            ]
        })
    }
    else {
        console.log("DATA is already");

    }
}

export { initDatabase }