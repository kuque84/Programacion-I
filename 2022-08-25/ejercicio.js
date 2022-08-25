'use strict';
const materias = ["Matematicas", "Fisica", "Plastica", "Informatica", "Historia"];
//array con valores constantes
 
//mostramos cada valor del array
console.log("Lista de materias"); //string           
console.log("1. " + materias[0]); //primer indice
console.log("2. " + materias[1]); //idem +1
console.log("3. " + materias[2]); //idem +1

//introducimos los cambios en el array
materias[0] = "Historia";
materias[2] = "Fisica";
materias.push("Contabilidad");//agrego al final elemento array
materias.unshift("Derecho"); //agrego al inicio elemento array
 
//volvemos a mostrar materias con cambios
 console.log("Lista de materias");           
 console.log("1. " + materias[0]);   
 console.log("2. " + materias[1]);
 console.log("3. " + materias[2]);
 console.log("4. " + materias[4]);

 console.log(materias); //array completo new
 console.table(materias); // con tabla