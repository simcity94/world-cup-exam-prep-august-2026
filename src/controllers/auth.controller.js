import { Router } from 'express';
import { getErrorMessage } from '../utils/errorUtils.js';
import { registerUser } from '../services/auth.service.js';
import { createAuthToken } from '../utils/token.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {

    try {

        const result = await registerUser(req.body);

        const token = createAuthToken(result);

        res.cookie('auth', token, { httpOnly: true });
    
        res.redirect('/');
        
    } catch (error) {

        console.error(error);
        const errorMessage = getErrorMessage(error);
        res.status(400).render('auth/register', { error: errorMessage, user: req.body });
    }
});

export default authController;