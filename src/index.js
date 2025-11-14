const express = require("express");

const { rotaUsuario } = require("./controllers/usuario");
const { rotaPontuacao } = require("./controllers/pontuacao");
const { rotaLogin } = require("./controllers/logar");
const { rotaRanking } = require("./controllers/ranking");
const { rotaPaginas } = require("./controllers/paginas");
const server = express();
server.use(express.json());
server.use(express.static("public"));

server.use(rotaPaginas);
server.use(rotaRanking);
server.use(rotaUsuario);
server.use(rotaPontuacao);
server.use(rotaLogin);
server.listen(3000, () => console.log("Ro---jjj---"));
