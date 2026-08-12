import { Router } from 'express';
import { getErrorMessage } from '../utils/errorUtils.js';
import { registerUser } from '../services/auth.service.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {

    try {

        const result = await registerUser(req.body);
    
        res.redirect('/');
        
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('auth/register', { error: errorMessage, user: req.body });
    }
});

export default authController;