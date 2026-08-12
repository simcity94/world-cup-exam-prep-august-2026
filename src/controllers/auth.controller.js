import { Router } from 'express';
import { registerSchema } from '../schemas/auth.schema.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', (req, res) => {

    try {
        const userData = registerSchema.parse(req.body);
    
        res.redirect('/');
        
    } catch (error) {
        
    }
});

export default authController;