var btnPlazas=document.getElementById("btn_Plazas");

function irAPlazas_Disponibles(){
    window.location.href="./plazas_dispo.html";
}
btnPlazas.addEventListener("click",irAPlazas_Disponibles);

var btnHistorial=document.getElementById("btn_Historial");

function irAHistorial(){
    window.location.href="./historial.html";
}

btnHistorial.addEventListener("click",irAHistorial);

$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null || permisos == "1"){
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