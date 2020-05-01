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

$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null || permisos == "2"){
        window.location.href="./index.html";
    }

    //Cierre de sesión
    var nombres = localStorage.getItem("nombres");
    $("#nombre_usuario").text(nombres);

    $( ".logo-usuario" ).click(function(){
        $(".btn-cerrar-sesion").toggleClass("btn-visible");
    });

    $( "#btn-cerrar-sesion" ).click(function(){
        localStorage.removeItem("index");
        localStorage.removeItem("permisos");
        localStorage.removeItem("nombres");
        window.location.href="./index.html";
    });
});