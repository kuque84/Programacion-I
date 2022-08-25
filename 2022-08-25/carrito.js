const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Tele", precio: 50000},
]
/*
for (let i = 0; i< carrito.length; i++){
    console.log(`Artículo: ${carrito[i].nombre}`);
}
*/
carrito.forEach ( function(carrito){
    console.log(`Artículo: ${carrito.nombre} Precio: $${carrito.precio}`);
})