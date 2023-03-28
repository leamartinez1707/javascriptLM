    //COTIZADOR DE SEGURO AUTOMOTOR

    //Preguntarle al cliente los datos del vehículo que quiere cotizar
    //Darle a elegir si quiere un seguro basico o contra toda
    //Eleccion de metodo de pago, contado(descuento 20%) o cuotas(recargo 15%)
    //Cotizarle segun lo seleccionado.

    //Porcentaje de cada seguro segun su tipo, basico o contra todo. Y de los metodos de pago.
    let seguroBasico = 0.12;
    let seguroTotal = 0.15;

    let pagoContado = 0.80;
    let pagoCuotas = 1.15;

    //Funciones para calcular el precio total del seguro segun el vehiculo elegido.
    let resultadoBasico = 0;
    function calcularSeguroBasico(precio, seguroBasico){

    resultadoBasico = precio * seguroBasico
    }

    let resultadoTotal = 0;
    function calcularSeguroTotal(precio, seguroTotal){

    resultadoTotal = precio * seguroTotal
    }
//-------------------------------------------
    //Funciones para calcular el resultado final en base al metodo de pago y seguro elegido.
    let resultadoFinal = 0;
    //Seguro basico
    function seguroBasicoContado(resultadoBasico, pagoContado){
    calcularSeguroBasico()
    resultadoFinal = Math.ceil(resultadoBasico * pagoContado)
    }
    function seguroBasicoCuotas(resultadoBasico, pagoCuotas){

    calcularSeguroBasico()    
    resultadoFinal = Math.ceil(resultadoBasico * pagoCuotas)
    }
    //Seguro total
    function seguroTotalContado(resultadoTotal, pagoContado){

    calcularSeguroTotal()
    resultadoFinal = Math.ceil(resultadoTotal * pagoContado)
    }
    function seguroTotalCuotas(resultadoTotal, pagoCuotas){

    calcularSeguroTotal()
    resultadoFinal = Math.ceil(resultadoTotal * pagoCuotas)
    }
//-------------------------------------------

    //Funciones para filtrar y buscar en el array de vehiculos. También se muestra en la tabla el vehiculo buscado y cotizado.
    let veFiltrado = []
    let veIngresado = []

    function filtrarVehiculo(){
    
    let recuperando_vehiculos = localStorage.getItem("vehiculosArray");
    vehiculosArray = JSON.parse( recuperando_vehiculos);

    let modeloIngresado = document.getElementById("select_modelo").value;
    veFiltrado = vehiculosArray.filter(vehiculo => vehiculo.modelo.includes(modeloIngresado));
}

    function buscarVehiculo(){

    filtrarVehiculo();

    let anioIngresado = document.getElementById("select_anio").value;
    veIngresado = veFiltrado.find(filtro => filtro.anio == anioIngresado);
    precio = veIngresado.precio;
    
    let tabla = document.getElementById("tablaVehiculos");
    tabla.innerHTML = "";

    let fila= document.createElement("tr");

    fila.innerHTML = `<td>${veIngresado.marca}</td>
                          <td>${veIngresado.modelo}</td>
                          <td>${veIngresado.precio}</td>
                          <td>${veIngresado.anio}</td>
                          `
    tabla.append(fila);
}
//-------------------------------------------

    //Buscar vehículos ingresados según modelo. (Sin funcionar aún)
function buscarVehiculoModelo(){

    let recuperando_vehiculos = localStorage.getItem("vehiculosArray");
    vehiculosArray = JSON.parse(recuperando_vehiculos);
    
    let modeloIngresado = document.getElementById("select_modelo").value;
    veFiltrado = vehiculosArray.filter(vh => vh.modelo.includes(modeloIngresado));

    let tabla = document.getElementById("tablaVehiculos");

    tabla.innerHTML = "";

    for( let vh of veFiltrado){

        let fila= document.createElement("tr");

        fila.innerHTML = `<td>${vh.marca}</td>
                          <td>${vh.modelo}</td>
                          <td>US$ ${vh.precio}</td>
                          <td>${vh.anio}</td>
                          `
        tabla.append(fila);
}
}
//-------------------------------------------

    //Ingresar un vehiculo al Array

    function agregarVehiculo(marca, modelo, precio, anio){

        
        
    marca = document.getElementById("select_marca").value;
    modelo = document.getElementById("select_modelo").value;
    precio = document.getElementById("select_precio").value;
    anio = document.getElementById("select_anio").value;
        
    if(marca == null || marca.length == 0){
                    
            alert("ERROR al ingresar datos, porfavor verifique el formulario")
            console.log(marca)
    }else{

        vehiculosArray.push(new Vehiculo(marca, modelo, precio, anio));
    
        let vehiculosArray_JSON = JSON.stringify(vehiculosArray);
        localStorage.setItem("vehiculosArray" , vehiculosArray_JSON);       
        alert("Se ingresaron los datos.")
            console.log(precio)
}

        mostrarTabla()
}    
//-------------------------------------------

    //Mostrar los datos del array en una tabla HTML
    function mostrarTabla(){

    let recuperando_vehiculos = localStorage.getItem("vehiculosArray");
    vehiculosArray = JSON.parse( recuperando_vehiculos);

    let tabla = document.getElementById("tablaVehiculos");
    let tablaC = document.getElementById("cotizado_body")
    tabla.innerHTML = "";
    tablaC.innerHTML = "";


    for( let vehiculo of vehiculosArray){

        let fila= document.createElement("tr");

        fila.innerHTML = `<td>${vehiculo.marca}</td>
                          <td>${vehiculo.modelo}</td>
                          <td>US$ ${vehiculo.precio}</td>
                          <td>${vehiculo.anio}</td>
                          `
        tabla.append(fila);

}
}
//-------------------------------------------

    //Inicio aplicación
    //Array de los vehiculos ingresados

    let vehiculosArray = [
        {marca: 'Volkswagen', modelo: 'Gol', precio: 30000, anio: 2015 },
        {marca: 'Volkswagen', modelo: 'Vento', precio: 40000, anio: 2013 },
        {marca: 'Volkswagen', modelo: 'Saveiro', precio: 50000, anio: 2011},
        {marca: 'Volkswagen', modelo: 'Nivus', precio: 25000, anio: 2019},
        {marca: 'Chevrolet', modelo: 'Aveo', precio: 55000, anio: 2022},
        {marca: 'Chevrolet', modelo: 'Camaro', precio: 82000, anio: 2008},
        {marca: 'Chevrolet', modelo: 'Cruze', precio: 53000, anio: 2023},
        {marca: 'Chevrolet', modelo: 'Onix', precio: 44000, anio: 2013},
        {marca: 'Suzuki', modelo: 'Alto', precio: 19000, anio: 2018},
        {marca: 'Suzuki', modelo: 'Celerio', precio: 15000, anio: 2016}];
//-------------------------------------------

    //Objeto Vehiculo constructor
    class Vehiculo{
    
    constructor(marca, modelo, precio, anio){
        
    this.marca = marca;
    this.modelo = modelo;
    this.precio = parseFloat(precio);
    this.anio = parseFloat(anio);
}
}
//-------------------------------------------

    //Con esta funcion, se cotiza el vehículo que se ingresó por último en las casillas de datos.

    function calcularCostoFinal(){

    let tipoSeguro = document.getElementsByName("tipoPlan");
    for (let radio of tipoSeguro){
        if(radio.checked){
            tipoSeguro = radio.value
        }
    }
    let tipoPago = document.getElementsByName("tipoPagos");
        for (let radioUno of tipoPago){
            if(radioUno.checked){
                tipoPago = radioUno.value
        }
    }

    filtrarVehiculo()
    buscarVehiculo()

    if(tipoSeguro == 1 && tipoPago == 1){

    
    calcularSeguroBasico(precio, seguroBasico)
        
    seguroBasicoContado(resultadoBasico, pagoContado)

    let tablaC = document.getElementById("cotizado_body");
    tablaC.innerHTML = "";

    let filaC = document.createElement("tr");

    filaC.innerHTML = `<td>Básico</td>
                          <td>Contado</td>
                          <td>US$ ${resultadoFinal}</td>
                          `
    tablaC.append(filaC);

    }else if(tipoSeguro == 1 && tipoPago == 2){
        
    calcularSeguroBasico(precio, seguroBasico)
    
    seguroBasicoCuotas(resultadoBasico, pagoCuotas)

    let tablaC = document.getElementById("cotizado_body");
    tablaC.innerHTML = "";

    let filaC = document.createElement("tr");

    filaC.innerHTML = `<td>Básico</td>
                          <td>Cuotas</td>
                          <td>US$ ${resultadoFinal}</td>
                          `
    tablaC.append(filaC);

    }else if(tipoSeguro == 2 && tipoPago == 1){

    calcularSeguroTotal(precio, seguroTotal)
        
    seguroTotalContado(resultadoTotal, pagoContado)

    let tablaC = document.getElementById("cotizado_body");
    tablaC.innerHTML = "";

    let filaC = document.createElement("tr");

    filaC.innerHTML = `<td>Total</td>
                          <td>Contado</td>
                          <td>US$ ${resultadoFinal}</td>
                          `
    tablaC.append(filaC);

    }else if(tipoSeguro == 2 && tipoPago == 2){
    
    calcularSeguroTotal(precio, seguroTotal)

    seguroTotalCuotas(resultadoTotal, pagoCuotas)

    let tablaC = document.getElementById("cotizado_body");
    tablaC.innerHTML = "";

    let filaC = document.createElement("tr");

    filaC.innerHTML = `<td>Total</td>
                          <td>Cuotas</td>
                          <td>US$ ${resultadoFinal}</td>
                          `
    tablaC.append(filaC);
}
}
//-------------------------------------------


    let btn_agregar = document.getElementById("botonAgregar");
    btn_agregar.addEventListener("click" , agregarVehiculo);

    let actualizarTabla = document.getElementById("act_tabla");
    actualizarTabla.addEventListener("click" , mostrarTabla);

    let cotizar = document.getElementById("botonCotizar");
    cotizar.addEventListener("click", calcularCostoFinal);

    let buscarVh = document.getElementById("botonBuscar");
    buscarVh.addEventListener("click", buscarVehiculoModelo);
//-------------------------------------------
        

//-----------------------------------------------------------------------------------------------------------------------

//--------------------> CODIGO VIEJO <--------------------
//Este código fue utilizado en la primera entrega.

// Precio de los vehiculos segun su marca y modelo (ya establecidos)
// const auto = {
//     marca: 'Suzuki',
//     modelo: 'Alto',
//     precio: 400000
// }

// const camioneta = {
//     marca: 'Volkswagen',
//     modelo: 'Fox',
//     precio: 550000
// }

// const moto = {
//     marca: 'Honda',
//     modelo: 'Crf250',
//     precio: 320000
// }

// const vehiculos = [
//     {marca: 'Volkswagen', modelo: 'Gol', precio: 30000, },
//     {marca: 'Volkswagen', modelo: 'Vento', precio: 40000, },
//     {marca: 'Volkswagen', modelo: 'Saveiro', precio: 50000, },
//     {marca: 'Volkswagen', modelo: 'Nivus', precio: 25000, },
//     {marca: 'Chevrolet', modelo: 'Aveo', precio: 55000, },
//     {marca: 'Chevrolet', modelo: 'Camaro', precio: 82000, },
//     {marca: 'Chevrolet', modelo: 'Cruze', precio: 53000, },
//     {marca: 'Chevrolet', modelo: 'Onix', precio: 44000, },
//     {marca: 'Suzuki', modelo: 'Alto', precio: 19000, },
//     {marca: 'Suzuki', modelo: 'Celerio', precio: 15000, }
// ]


// El usuario elije el tipo de vehiculo que quiere asegurar.
// console.log('Bienvenidos/as')
// alert("Bienvenido al cotizador de seguros de Leandro Martinez")
// let vehiculoACotizar = parseInt(prompt("Digite el número del vehiculo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));

// console.log(vehiculoACotizar)

// while(vehiculoACotizar != 0 && vehiculoACotizar <= 3){


// if(vehiculoACotizar == 1)
// {
//     alert('Usted eligió el vehículo 1. Auto')
//     console.log(auto)
// }else if(vehiculoACotizar == 2)
// {
//     alert('Usted eligió el vehículo 2. Camioneta')
//     console.log(camioneta)
// }else if(vehiculoACotizar == 3)
// {
//     alert('Usted eligió el vehículo 3. Moto')
//     console.log(moto)
// }else if(vehiculoACotizar >= 4)
// {
//     console.error("No existe ese vehículo")
//     alert("Vehículo elegido incorrectamente, vuelva a intentarlo")
//     alert("Bienvenido al cotizador de seguros de Leandro Martinez")
//     vehiculoACotizar = parseInt(prompt("Digite el número del vehículo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));
// }
// // -------------------------------------------

// // El usuario elije el tipo de seguro
// alert("Elija el tipo de seguro que quiere utilizar")
// let tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
// console.log(tipoSeguro)

    
//     if(tipoSeguro == 0)
//     {
//         console.error("No existe ese tipo de seguro")
//         alert("Tipo de seguro no encontrado, vuelva a seleccionar el seguro")
//         alert("Elija el tipo de seguro que quiere utilizar")
//         tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
//     }
//     else if(tipoSeguro >= 3){
//         console.error("No existe ese tipo de seguro")
//         alert("Tipo de seguro no encontrado, vuelva a seleccionar el seguro")
//         alert("Elija el tipo de seguro que quiere utilizar")
//         tipoSeguro = parseInt(prompt('1. Seguro básico, 2. Seguro total contra todo'));
//     }
//     else if(tipoSeguro == 1){
//         alert('Ha elegido el seguro básico para su vehículo')
//         console.log('Seguro básico')
//         }
//     else if(tipoSeguro == 2){
//     alert('Ha elegido el seguro total contra todo para su vehículo')
//     console.log('Seguro total')
//     }

// // -------------------------------------------

// // El usuario elije el metodo de pago.
// let tipoPago = parseInt(prompt('1. Contado (20% descuento), 2. Cuotas (15% recargo)'));
// console.log(tipoPago)


// if(tipoPago == 0){
//     alert("El método de pago que eligió no existe, seleccione un nuevo método!")
//     console.error("No existe ese método de pago")
// }
// else if(tipoPago >= 3){
//     alert("El método de pago que eligió no existe, seleccione un nuevo método!")
//     console.error("No existe ese método de pago")
// }
// else if(tipoPago == 1)
// {
// alert('Usted eligió pagar al contado con 20% de descuento')
// console.log('Pago al contado')
// }else{
//     alert('Usted eligió pagar en cuotas con 15% de recargo')
//     console.log('Pago en cuotas')
// }

// // -------------------------------------------

// // Con este if, calculamos el precio final, en base a lo que haya seleccionado el usuario
// // El sistema ejecuta el if, hasta llegar al vehiculo que fue seleccionado y asi calcular el seguro.

//     if(vehiculoACotizar == 1){

//         if(tipoSeguro && tipoPago == 1){
    
//             calcularSeguroBasico(auto.precio, seguroBasico)
    
//             seguroBasicoContado(resultadoBasico, pagoContado)
   
//             mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }
//     else if(tipoSeguro == 1 && tipoPago == 2){
    
//         calcularSeguroBasico(auto.precio, seguroBasico)
    
//         seguroBasicoCuotas(resultadoBasico, pagoCuotas)
    
//         mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 1){
    
//     calcularSeguroTotal(auto.precio, seguroTotal)

//     seguroTotalContado(resultadoTotal, pagoContado)

//     mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 2){
    
//     calcularSeguroTotal(auto.precio, seguroTotal)

//     seguroTotalCuotas(resultadoTotal, pagoCuotas)

//     mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }
// }else if(vehiculoACotizar == 2){

//     if(tipoSeguro && tipoPago == 1){

//         calcularSeguroBasico(camioneta.precio, seguroBasico)

//         seguroBasicoContado(resultadoBasico, pagoContado)

//         mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }
// else if(tipoSeguro == 1 && tipoPago == 2){

//     calcularSeguroBasico(camioneta.precio, seguroBasico)

//     seguroBasicoCuotas(resultadoBasico, pagoCuotas)

//     mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 1){

// calcularSeguroTotal(camioneta.precio, seguroTotal)

// seguroTotalContado(resultadoTotal, pagoContado)

// mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 2){

// calcularSeguroTotal(camioneta.precio, seguroTotal)

// seguroTotalCuotas(resultadoTotal, pagoCuotas)

// mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }
// }else if(vehiculoACotizar == 3){

//         if(tipoSeguro && tipoPago == 1){

//         calcularSeguroBasico(moto.precio, seguroBasico)

//         seguroBasicoContado(resultadoBasico, pagoContado)

//         mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }
// else if(tipoSeguro == 1 && tipoPago == 2){

//     calcularSeguroBasico(moto.precio, seguroBasico)

//     seguroBasicoCuotas(resultadoBasico, pagoCuotas)

//     mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 1){

// calcularSeguroTotal(moto.precio, seguroTotal)

// seguroTotalContado(resultadoTotal, pagoContado)

// mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }else if(tipoSeguro == 2 && tipoPago == 2){

// calcularSeguroTotal(moto.precio, seguroTotal)

// seguroTotalCuotas(resultadoTotal, pagoCuotas)

// mostrar('El costo final de su seguro es de $' + resultadoFinal)
// }

// }
    
//     alert("Bienvenido al cotizador de seguros de Leandro Martinez")
//     vehiculoACotizar = parseInt(prompt("Digite el número del vehículo a cotizar (1. Auto, 2. Camioneta, 3. Moto) o escriba 0 para cancelar."));

// }

//-------------------------------------------