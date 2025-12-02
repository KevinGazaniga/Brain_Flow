import express from "express";
// @ts-ignore: missing declaration file for './controllers/usuario'
import { rotaUsuario } from "./controllers/usuario.js";
// @ts-ignore: missing declaration file for './controllers/logar'
import { rotaLogin } from "./controllers/logar.js";
// @ts-ignore: missing declaration file for './controllers/paginas'
import { rotaPaginas } from "./controllers/paginas.js";
const server = express();
server.use(express.json());
server.use(express.static("public"));
server.use(rotaPaginas);
server.use(rotaUsuario);
server.use(rotaLogin);
server.listen(3000, () => console.log("Ro---jjj---"));
