// Acá nos falta nuestra fuente de datos

const platos = [
    {
        "id" : "0",
        "title" : "Carpaccio fresco",
        "description" : "Entrada Carpaccio de salmón con cítricos",
        "price" : 65.50,
        "image" : "Carpaccio-de-salmon.jpg"
    },
    {
        "id" : 3,
        "title" : "Risotto de berenjena",
        "description" : "Risotto de berenjena y queso de cabra",
        "price" : 47.00,
        "image" : "Risotto-berenjena-queso-cabra.jpg"
    }, 
    {
        "id" : 12,
        "title" : "Mousse de arroz",
        "description" : "Mousse de arroz con leche y aroma de azahar",
        "price" : 27.50,
        "image" : "Mousse-de-arroz-con-leche.jpg"
    }, 
    {
        "id" : 9,
        "title" : "Espárragos blancos",
        "description" : "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        "price" : 37.50,
        "image" : "esparragos.jpg"
    }
];

// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    showIndex : function(req, res) {
        res.render('index', {platos});
    },
    showMenuDetail : function(req, res) {
        const {id} = req.params;
        const platillo = platos.find(plato => plato.id == id);
        console.log(platillo); 
        res.render('menuDetail', {platillo});
    },
}

// Acá exportamos el resultado
module.exports = controller;