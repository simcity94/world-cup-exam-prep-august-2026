import { prisma } from "../lib/prisma.js";

export function createUser(userData) {
    return prisma.user.create({
        data: userData
    });
}