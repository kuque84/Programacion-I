const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m',
             fabricacion :{
                 china :"china",
                 anio :"2015",
             }
    }
}

console.log(producto.informacion.fabricacion.anio)