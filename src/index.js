import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/auth.middleware.js';

const app = express();

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('src/public'));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(authMiddleware);

app.use(routes);

app.listen(3000, () => {console.log('Server is running on http://localhost:3000...')});