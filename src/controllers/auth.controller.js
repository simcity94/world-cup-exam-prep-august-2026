import { Router } from 'express';
import { registerSchema } from '../schemas/auth.schema.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', (req, res) => {

    try {
        const userData = registerSchema.parse(req.body);
    
        res.redirect('/');
        
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('auth/register', { error: errorMessage});
    }
});

export default authController;