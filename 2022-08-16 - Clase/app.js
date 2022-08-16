'use strict';
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

console.log(producto);
//console.log(producto.informacion.medidas.peso);
//console.log(informacion.peso);
//console.log(informacion.medidas.medida);
//console.log(nombre);
//console.log(informacion.fabricacion);
//workbench.action.terminal.clear();
console.clear();
Object.seal(producto);
producto.disponible = false;
producto.precio = 40;
console.log(producto.disponible);
console.log(producto.precio);
console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));
