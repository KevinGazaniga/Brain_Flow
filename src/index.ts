import express from "express";

import { rotaUsuario } from "./controllers/usuario";
import { rotaLogin } from "./controllers/logar";
import { rotaPaginas } from "./controllers/paginas";

const server = express();
server.use(express.json());
server.use(express.static("public"));

server.use(rotaPaginas);
server.use(rotaUsuario);
server.use(rotaLogin);
server.listen(3000, () => console.log("Ro---jjj---"));
