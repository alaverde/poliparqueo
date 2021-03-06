
$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null){
        window.location.href="./index.html";
    }

    $("#btn-registrar").click(function(){

        formSalida = document.getElementById("form-salida");
    
        if(!formSalida.checkValidity()){
            $("#mensajeError").text("Todos los campos son obligatorios");
        }else{
            $.ajax({
                type: 'POST',
                //dataType: 'json', //Opcional
                //contentType: 'application/json', //Opcional
                url: 'http://localhost/poliparqueo_back/servicios/registros.php',
                data: $("#form-salida").serialize()+"&parqueadero="+localStorage.getItem("parqueadero_asignado"),
                success: function(response){
                    if(response.result == true){
                        $('#form-salida')[0].reset();
                        alert("El registro se ha guardado correctamente.");
                    }else{
                        $("#mensajeError").text(response.mensaje);
                    }
                    console.log(response);
                },
                error: function(response){
                    console.log(response);
                },
                timeout: 2000 //Opcional
            });
        }
    
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

