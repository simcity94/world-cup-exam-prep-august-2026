import { prisma } from "../lib/prisma.js";

export function createUser(userData) {
    return prisma.user.create({
        data: userData
    });
}

export async function findByEmail(email) {
    const user = await prisma.user.findUnique({
        where: { email }
    });

    return user;
}

const userRepository = {
    createUser,
    findByEmail
};

export default userRepository;