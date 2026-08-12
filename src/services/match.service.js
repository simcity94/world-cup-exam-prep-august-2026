import matchRepository from "../repositories/match.repository.js";

function createMatch(matchData, userId) {
    matchData.userId = userId;
    return matchRepository.create(matchData);
}

const matchService = {
    createMatch
}

export default matchService;