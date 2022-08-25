class Producto {
    constructor(nombre, valor, cantidad){
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }
    toString(){
        return `Nombre: ${this.nombre}, Valor: ${this.valor}, Cantidad: ${this.cantidad}, Total: ${this.valor * this.cantidad}`;
    }
}

class Inventario {
    constructor(productos){
        this.productos = productos;
    }
    agregar(productoNuevo){
        this.productos.push(productoNuevo);
    }
}

let inventarioArt = new Inventario([]);

function ingresar(){
    let nombre = document.getElementById("nombre").value; 
    let valor = Number(document.getElementById("valor").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    document.getElementById("correcto").innerText = '';

    let validar = (() => {
        let mensaje = "";
        if (nombre == "") {
            mensaje += "Ingrese un nombre" + '\n';
        }
        if (valor == ""){
            mensaje += "Ingrese un valor" + '\n';
        }
        if (cantidad == ""){
            mensaje += "Ingrese una cantidad" + '\n';
        }
        if (isNaN(cantidad)){
            mensaje += "Ingrese una cantidad" + '\n';
        }
        if (isNaN(valor)){
            mensaje += "Ingrese un valor" + '\n';
        }
        let parrafo_errores = document.getElementById("mensaje");
        parrafo_errores.innerText = mensaje;
        return mensaje == "" ? true : false;
    })

    if (validar()) {
        let nuevo = new Producto(nombre, valor, cantidad);
        inventarioArt.agregar(nuevo);
        document.getElementById("correcto").innerText = `Producto agregado correctamente`;
        document.getElementById("formulario").reset();
    }
    document.getElementById("lista").innerText = "";
}

function listar(){
    let resultado = document.getElementById("lista");
    if (inventarioArt.productos ==""){
        resultado.innerText = "No ha ingresado ningún producto aún";
        document.getElementById("correcto").innerText = "";
    } else {
        document.getElementById("lista").innerText = "";
        inventarioArt.productos.forEach(productos => resultado.innerText += productos.toString() + "\n");
        inventarioArt.productos.forEach(productos => console.log(productos.toString()))
        document.getElementById("correcto").innerText = "";
    }
}
