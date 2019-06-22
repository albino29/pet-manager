const express = require('express');
const routes = express.Router();
const PetController = require('./controllers/PetController');

routes.get('/pet', PetController.index);
routes.get('/pet/:id', PetController.show);
routes.post('/pet', PetController.store);
routes.put('/pet/:id', PetController.update);
routes.delete('/pet/:id', PetController.destroy);

module.exports = routes;
