const platos = [
    {
        id : 0,
        title : "Carpaccio fresco",
        description : "Entrada Carpaccio de salmón con cítricos",
        price : "65.50"
    },
    {
        id : 3,
        title : "Risotto de berenjena",
        description : "Risotto de berenjena y queso de cabra",
        price : "47.00"
    }, 
    {
        id : 12,
        title : "Mousse de arroz",
        description : "Mousse de arroz con leche y aroma de azahar",
        price : "27.50"
    }, 
    {
        id : 9,
        title : "Espárragos blancos",
        description : "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price : "37.50"
    }
]

// const comida = platos.forEach(plato => console.log(plato.title, plato.description, plato.price));

let encontrarPlato = (id) => {
    const busqueda = platos.find(meal => id == meal.id);
    return busqueda;
}

console.log(encontrarPlato(0));

