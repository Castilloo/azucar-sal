// Módulos
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes/mainRouter');

// Acá falta uno... 😇
app.set('views', path.resolve(__dirname, 'views'));

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');

// Rutas
app.use('/', routes);

// Acá falta el archivo de rutas y después las vistas de EJS

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})