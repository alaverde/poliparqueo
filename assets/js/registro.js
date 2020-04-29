
$("#btn-registro").click(function(){

    formLogin = document.getElementById("formRegistro");

    if(!formLogin.checkValidity()){
        $("#mensajeError").text("Todos los campos son obligatorios");
    }else{
        $.ajax({
            type: 'POST',
            //dataType: 'json', //Opcional
            //contentType: 'application/json', //Opcional
            url: 'http://localhost/poliparqueo_back/servicios/usuarios.php',
            data: $("#formRegistro").serialize(),
            success: function(response){
                /*if(response.result == true){
                    window.location.href="./ppal_adm.html";
                }else{
                    $("#mensajeError").text("Usuario o contraseña incorrecto");
                }*/
                console.log(response);
            },
            error: function(response){
                console.log(response);
            },
            timeout: 2000 //Opcional
        });
    }

});