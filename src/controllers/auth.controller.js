import { Router } from 'express';
import { getErrorMessage } from '../utils/errorUtils.js';
import authService, { loginUser, registerUser } from '../services/auth.service.js';
import { createAuthToken } from '../utils/token.js';
import { isAuthenticated, isGuest } from '../middlewares/auth.middleware.js';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {

    try {

        const result = await authService.registerUser(req.body);

        const token = createAuthToken(result);

        res.cookie('auth', token, { httpOnly: true });
    
        res.redirect('/');
        
    } catch (error) {

        const errorMessage = getErrorMessage(error);
        res.status(400).render('auth/register', { error: errorMessage, user: req.body });
    }
});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {

    try {
        const { email, password } = req.body;

        const token = await authService.loginUser({ email, password });

        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {

        const errorMessage = getErrorMessage(error);

        res.status(400).render('auth/login', { error: errorMessage, user: req.body });

    }
});

authController.get('/logout', isAuthenticated,  (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


export default authController;