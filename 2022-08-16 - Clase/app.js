const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas :{
            peso: '1kg',
            medida: '1m',
        },
        fabricacion:{
            pais :'China',
            anio :'2011',
        }
    } 

}


const {nombre, informacion, informacion:{peso}} = producto;

//console.log(producto);
//console.log(producto.informacion.medidas.peso);
//console.log(informacion.peso);
//console.log(informacion.medidas.medida);
//console.log(nombre);
//console.log(informacion.fabricacion);