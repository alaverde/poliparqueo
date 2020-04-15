var btnIngreso=document.getElementById("btn_Ingresar");
console.log(btnIngreso);

function irAIngresar(){
    window.location.href="./ingreso.html";
}

btnIngreso.addEventListener("click",irAIngresar);

var btnSalida=document.getElementById("btn_Salida");
console.log(btnSalida);

function irASalida(){
    window.location.href="./salida.html";
}

btnSalida.addEventListener("click",irASalida);

var btnPlazas=document.getElementById("btn_Plazas");
console.log(btnPlazas);

function irAPlazas_Disponibles(){
    window.location.href="./plazas_dispo.html";
}

btnPlazas.addEventListener("click",irAPlazas_Disponibles);

var btnHistorial=document.getElementById("btn_Historial");
console.log(btnHistorial);

function irAHistorial(){
    window.location.href="./historial.html";
}

btnHistorial.addEventListener("click",irAHistorial);