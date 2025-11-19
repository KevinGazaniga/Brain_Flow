const express = require("express");

const { rotaUsuario } = require("./controllers/usuario");
const { rotaLogin } = require("./controllers/logar");
const { rotaPaginas } = require("./controllers/paginas");
const server = express();
server.use(express.json());
server.use(express.static("public"));

server.use(rotaPaginas);
server.use(rotaUsuario);
server.use(rotaLogin);
server.listen(3000, () => console.log("Ro---jjj---"));
