"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
/* GET, POST, PUT, PATCH, DELETE

GET = Buscar informações no banco de dados
POST = Cadastrar informações no banco
PUT = Atualizar informações de uma entidade (uma rota, nome senha....)
PATCH = Atualizar uma info unica de uma entidade (receber ou email da plataforma)
DELETE = Deletar uma info*/
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log('HTTP sever running');
});
