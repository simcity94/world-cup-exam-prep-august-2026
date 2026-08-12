import { prisma } from "../lib/prisma.js";

async function create(matchData) {

    const match = await prisma.match.create({
        data: matchData
    });

    return match;
}

const matchRepository = {
    create
}

export default matchRepository;