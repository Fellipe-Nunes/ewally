const { Router } = require("express");
const BoletoController = require('./controllers/BoletoController');
const routes = Router();

routes.get("/", (request, response) => {
  response.status(200).send({
    title: "Teste Ewally",
    version: "0.0.1"
  });
});

routes.post('/boleto', BoletoController.store);

module.exports = routes;
