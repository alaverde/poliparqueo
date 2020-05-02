
var listaParqueaderos = new Vue({
    el: '#lista-parqueaderos',
    data: {
        items : []
    }
});

$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null){
        window.location.href="./index.html";
    }
    $.ajax({
        type: 'POST',
        //dataType: 'json', //Opcional
        //contentType: 'application/json', //Opcional
        url: 'http://localhost/poliparqueo_back/servicios/registros.php',
        data:"metodo=consultarPlazasLibres",
        success: function(response){
            if(response.result == true){
                listaParqueaderos.items = response.libres;
                console.log(response);
            }else{
                console.log(response);
            }
        },
        error: function(response){
            console.log(response);
        },
        timeout: 2000 //Opcional
    });

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