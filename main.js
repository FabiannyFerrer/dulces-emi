// Cotizador de pedidos - Tortas

const precioPorcionTorta = 12000;

// Solicitud de datos al usuario
let nombreCliente = prompt("Ingresa tu nombre:");
let saborTorta = prompt("Ingresa el sabor de la torta:");
let cantidadPorciones = parseInt(prompt("Ingresa la cantidad de porciones:"));

// Cálculo del total a pagar
let totalPedido = precioPorcionTorta * cantidadPorciones;

//Concatenacion
let saludo = "Hola " + nombreCliente + ", el total a pagar por tu torta de " + saborTorta + " es: $" + totalPedido;

// Mostrar el resultado al usuario
alert(saludo);
console.log(saludo);