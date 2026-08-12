import { Router } from 'express';
import { registerSchema } from '../schemas/auth.schema.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {

    try {
        const userData = await registerSchema.parseAsync(req.body);

        console.log('User data after validation and transformation:', userData);
    
        res.redirect('/');
        
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('auth/register', { error: errorMessage, user: req.body });
    }
});

export default authController;