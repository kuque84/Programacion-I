const empleados ={
    nombre: "Badolato Braian Emanuel",
    documento: "34871624",
    telefono: "418793",
    fisico:{
        peso:"77",
        altura:"170",
        edad: "28",
        Direccion:{
            calle: "norberto napolitano 53",
            barrio: "santa monica",
            localidad: "santa rosa calamuchita",
            pais: "argentina",
        }
    }
}
empleados.img = "img.jpg";

const {nombre: nom, documento: dni, telefono: tel, fisico:{peso: p}} = empleados;

console.log(dni);
console.log(p);