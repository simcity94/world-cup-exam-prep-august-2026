import { Router } from 'express';
import homeController from "./controllers/home.controller.js";
import authController from './controllers/auth.controller.js';
import matchController from './controllers/match.controller.js';

const routes = Router();

routes.use('/', homeController);
routes.use('/auth', authController);
routes.use('/match', matchController);

export default routes;