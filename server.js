const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const server = express();

// Utilizado para que o routes possa pegar o conteudo do post de outro arquivo
server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.listen(8000, function () {
  console.log("Server is running");
});
