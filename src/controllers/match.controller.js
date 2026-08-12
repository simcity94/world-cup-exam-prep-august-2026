import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import createMatchSchema from '../schemas/match.schema.js';
import matchService from '../services/match.service.js';

const matchController = Router();

matchController.get('/create', isAuthenticated, (req, res) => {
  res.render('match/create');
}
);

matchController.post('/create', isAuthenticated, async (req, res) => {
  
    const userId = req.user.id;

    try {
        const matchData = createMatchSchema.parse(req.body);

        await matchService.createMatch(matchData, userId);
        
        res.redirect('/match/dashboard');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).render('match/create', { error: errorMessage, match: req.body });
    }

    res.redirect('/match/dashboard');
});
export default matchController;
