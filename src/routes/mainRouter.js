// Acá nos falta express y el router
const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const controller = require('../controllers/mainController');

// Acá definimos las rutas
router.get('/', controller.showIndex);
router.get('/menuDetail/:id', controller.showMenuDetail);
// router.get('/menuDetail/:id', controller.mealDetail);

// Acá exportamos el resultado
module.exports = router;