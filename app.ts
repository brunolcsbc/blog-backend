import express from 'express';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
const app = express();
import * as path from 'path';

const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));
app.use(express.json());
// Servir arquivos estáticos com CORS
app.use('/static', express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        res.set('Access-Control-Allow-Origin', '*');
    }
}));
app.use(morgan("dev"));

// Verifica autenticação
import { isAuthenticate } from './middlewares/isAuthenticate';
app.use(isAuthenticate(({
    excludedPaths: [ "/login", "/users", "/static" ],
    excludedMethods: [ "get", "post" ]
})));

// Importando rotas
import RouterPost from './src/routes/posts';
import RouterUser from './src/routes/user';
import RouterCurtidas from './src/routes/curtidas';
import RouterLogin from './src/routes/login';
app.use('/posts', RouterPost);
app.use('/users', RouterUser);
app.use('/likes', RouterCurtidas);
app.use('/', RouterLogin);

// Capturar erros
import { errorHandler } from './middlewares/errorHandler';
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
})