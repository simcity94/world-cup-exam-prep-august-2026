import { Router } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import createMatchSchema from '../schemas/match.schema.js';

const matchController = Router();

matchController.get('/create', isAuthenticated, (req, res) => {
  res.render('match/create');
}
);

matchController.post('/create', isAuthenticated, (req, res) => {
  
    try {
        const matchData = createMatchSchema.parse(req.body);
        console.log('Match data validated successfully:', matchData);
        
        res.redirect('/match/dashboard');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).render('match/create', { error: errorMessage, match: req.body });
    }

    res.redirect('/match/dashboard');
});
export default matchController;
