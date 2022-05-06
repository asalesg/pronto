import express from 'express'
import { routes } from './routes';
import cors from 'cors'

/* GET, POST, PUT, PATCH, DELETE

GET = Buscar informações no banco de dados
POST = Cadastrar informações no banco
PUT = Atualizar informações de uma entidade (uma rota, nome senha....)
PATCH = Atualizar uma info unica de uma entidade (receber ou email da plataforma)
DELETE = Deletar uma info*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)



app.listen(3333, () => {
    console.log('HTTP sever running')
});