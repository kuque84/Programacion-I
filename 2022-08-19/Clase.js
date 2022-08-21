'use strict';
/* deconstruir  */
/*
const Empleado ={
    nombre: "Eugenio",
    apellido: "Regis",
    dni: "30711347",
    direccion: "Fatima 261",
    localidad: "Villa Ciudad Parque",
    seccion: "Ventas",
}

const { nombre: nom, apellido: ape, dni: doc, seccion: area} = Empleado;

console.log (Empleado);
console.log (`${nom} ${ape}, ${doc} - ${area}`);
*/

/*  assing and spread   */
/*
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}
const fabricacion={
    pais :'China',
    anio :'2011'
}

const resultado = {...producto, ...medidas, ...fabricacion};

console.log(resultado);
*/

/*  Funcion dentro de Objeto    */
/*
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de $${this.precio}`);
    }
}
producto.mostrarInfo();
*/

/*      Object Literal      */
/*
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}
*/

/*      Object Construtor CONSTRUCTOR       */
/*
function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto ("Monitor 23 Pulgadas", "35");
console.log(producto2);
const producto3 = new Producto ("Monitor 42 Pulgadas", "50");
console.log(producto3);
*/