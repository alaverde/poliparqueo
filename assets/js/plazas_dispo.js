
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
        data:"metodo=consultarPlazasLibres&parqueadero="+localStorage.getItem("parqueadero_asignado"),
        success: function(response){
            if(response.result == true){
                $("#plazas_libres").val(response.libres);
            
            }else{
                console.log(response);
            }
            console.log(response);
        },
        error: function(response){
            console.log(response);
        },
        timeout: 2000 //Opcional
    });


});