// COTIZADOR DE SEGURO AUTOMOTOR

// Preguntarle a la persona que quiere asegurar : Auto, Camioneta, Moto (Cada uno ya con un precio definido)
// Darle a elegir si quiere un seguro basico o contra toda
// Eleccion de metodo de pago, contado(descuento 20%) o cuotas(recargo 15%)
// Cotizarle segun lo seleccionado.

// Precio de los vehiculos segun su marca y modelo (ya establecidos)
const auto = {
    marca: 'Suzuki',
    modelo: 'Alto',
    precio: 400000
}

const camioneta = {
    marca: 'Volkswagen',
    modelo: 'Fox',
    precio: 550000
}

const moto = {
    marca: 'Honda',
    modelo: 'Crf250',
    precio: 320000
}

// Porcentaje de cada seguro segun su tipo, basico o contra todo. Y de los metodos de pago.
let seguroBasico = 0.12;
let seguroTotal = 0.15;

let pagoContado = 0.80;
let pagoCuotas = 1.15;

// Funciones para calcular el precio total del seguro segun el vehiculo elegido.
let resultadoBasico = 0;
function calcularSeguroBasico(precio, seguroBasico){

    resultadoBasico = precio * seguroBasico
}

let resultadoTotal = 0;
function calcularSeguroTotal(precio, seguroTotal){
    resultadoTotal = precio * seguroTotal
}
// -------------------------------------------
// Funciones para calcular el resultado final en base al metodo de pago y seguro elegido.
let resultadoFinal = 0;
function seguroBasicoContado(resultadoBasico, pagoContado){
    resultadoFinal = resultadoBasico * pagoContado
}
function seguroBasicoCuotas(resultadoBasico, pagoCuotas){
    resultadoFinal = resultadoBasico * pagoCuotas
}
function seguroTotalContado(resultadoTotal, pagoContado){
    resultadoFinal = resultadoTotal * pagoContado
}
function seguroTotalCuotas(resultadoTotal, pagoCuotas){
    resultadoFinal = resultadoTotal * pagoCuotas
}
// -------------------------------------------
// Muestra el mensaje final
function mostrar(mensaje){
    console.log(mensaje)
    alert(mensaje)
}
// ------------------------

// El usuario elije el tipo de vehiculo que quiere asegurar.
alert("Bienvenido al cotizador de seguros de Leandro Martinez")
let vehiculoACotizar = parseInt(prompt("Digite el número del vehiculo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));

console.log(vehiculoACotizar)

while(vehiculoACotizar != 0 && vehiculoACotizar <= 3){


if(vehiculoACotizar == 1)
{
    alert('Usted eligió el vehículo 1. Auto')
    console.log(auto)
}else if(vehiculoACotizar == 2)
{
    alert('Usted eligió el vehículo 2. Camioneta')
    console.log(camioneta)
}else if(vehiculoACotizar == 3)
{
    alert('Usted eligió el vehículo 3. Moto')
    console.log(moto)
}else if(vehiculoACotizar >= 4)
{
    console.error("No existe ese vehículo")
    alert("Vehículo elegido incorrectamente, vuelva a intentarlo")
    alert("Bienvenido al cotizador de seguros de Leandro Martinez")
    vehiculoACotizar = parseInt(prompt("Digite el número del vehículo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));
}
// -------------------------------------------

// El usuario elije el tipo de seguro
alert("Elija el tipo de seguro que quiere utilizar")
let tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
console.log(tipoSeguro)

    
    if(tipoSeguro == 0)
    {
        console.error("No existe ese tipo de seguro")
        alert("Tipo de seguro no encontrado, vuelva a seleccionar el seguro")
        alert("Elija el tipo de seguro que quiere utilizar")
        tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
    }
    else if(tipoSeguro >= 3){
        console.error("No existe ese tipo de seguro")
        alert("Tipo de seguro no encontrado, vuelva a seleccionar el seguro")
        alert("Elija el tipo de seguro que quiere utilizar")
        tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
    }
    else if(tipoSeguro == 1){
        alert('Ha elegido el seguro básico para su vehículo')
        console.log('Seguro básico')
        }
    else if(tipoSeguro == 2){
    alert('Ha elegido el seguro total contra todo para su vehículo')
    console.log('Seguro total')
    }

// -------------------------------------------

// El usuario elije el metodo de pago.
let tipoPago = parseInt(prompt('1. Contado (20% descuento), 2. Cuotas (15% recargo)'));
console.log(tipoPago)


if(tipoPago == 0){
    alert("El método de pago que eligió no existe, seleccione un nuevo método!")
    console.error("No existe ese método de pago")
}
else if(tipoPago >= 3){
    alert("El método de pago que eligió no existe, seleccione un nuevo método!")
    console.error("No existe ese método de pago")
}
else if(tipoPago == 1)
{
alert('Usted eligió pagar al contado con 20% de descuento')
console.log('Pago al contado')
}else{
    alert('Usted eligió pagar en cuotas con 15% de recargo')
    console.log('Pago en cuotas')
}

// -------------------------------------------

// Con este if, calculamos el precio final, en base a lo que haya seleccionado el usuario
// El sistema ejecuta el if, hasta llegar al vehiculo que fue seleccionado y asi calcular el seguro.

    if(vehiculoACotizar == 1){

        if(tipoSeguro && tipoPago == 1){
    
            calcularSeguroBasico(auto.precio, seguroBasico)
    
            seguroBasicoContado(resultadoBasico, pagoContado)
   
            mostrar('El costo final de su seguro es de $' + resultadoFinal)
}
    else if(tipoSeguro == 1 && tipoPago == 2){
    
        calcularSeguroBasico(auto.precio, seguroBasico)
    
        seguroBasicoCuotas(resultadoBasico, pagoCuotas)
    
        mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 1){
    
    calcularSeguroTotal(auto.precio, seguroTotal)

    seguroTotalContado(resultadoTotal, pagoContado)

    mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 2){
    
    calcularSeguroTotal(auto.precio, seguroTotal)

    seguroTotalCuotas(resultadoTotal, pagoCuotas)

    mostrar('El costo final de su seguro es de $' + resultadoFinal)
}
}else if(vehiculoACotizar == 2){

    if(tipoSeguro && tipoPago == 1){

        calcularSeguroBasico(camioneta.precio, seguroBasico)

        seguroBasicoContado(resultadoBasico, pagoContado)

        mostrar('El costo final de su seguro es de $' + resultadoFinal)
}
else if(tipoSeguro == 1 && tipoPago == 2){

    calcularSeguroBasico(camioneta.precio, seguroBasico)

    seguroBasicoCuotas(resultadoBasico, pagoCuotas)

    mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 1){

calcularSeguroTotal(camioneta.precio, seguroTotal)

seguroTotalContado(resultadoTotal, pagoContado)

mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 2){

calcularSeguroTotal(camioneta.precio, seguroTotal)

seguroTotalCuotas(resultadoTotal, pagoCuotas)

mostrar('El costo final de su seguro es de $' + resultadoFinal)
}
}else if(vehiculoACotizar == 3){

        if(tipoSeguro && tipoPago == 1){

        calcularSeguroBasico(moto.precio, seguroBasico)

        seguroBasicoContado(resultadoBasico, pagoContado)

        mostrar('El costo final de su seguro es de $' + resultadoFinal)
}
else if(tipoSeguro == 1 && tipoPago == 2){

    calcularSeguroBasico(moto.precio, seguroBasico)

    seguroBasicoCuotas(resultadoBasico, pagoCuotas)

    mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 1){

calcularSeguroTotal(moto.precio, seguroTotal)

seguroTotalContado(resultadoTotal, pagoContado)

mostrar('El costo final de su seguro es de $' + resultadoFinal)
}else if(tipoSeguro == 2 && tipoPago == 2){

calcularSeguroTotal(moto.precio, seguroTotal)

seguroTotalCuotas(resultadoTotal, pagoCuotas)

mostrar('El costo final de su seguro es de $' + resultadoFinal)
}

}
    
    alert("Bienvenido al cotizador de seguros de Leandro Martinez")
    vehiculoACotizar = parseInt(prompt("Digite el número del vehículo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));

}

// -------------------------------------------