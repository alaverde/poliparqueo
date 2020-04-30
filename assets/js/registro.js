
$("#btn-registro").click(function(){

    formLogin = document.getElementById("formRegistro");

    if($("#txt_contrasena").val() != $("#txt_contrasena2").val()){
        $("#mensajeError").text("Las contraseñas no son iguales.");
        return;
    }

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
                if(response.result == true){
                    alert("Se ha registrado exitosamente");
                    window.location.href="./index.html";
                }else{
                    console.log(response);
                }
                
            },
            error: function(response){
                console.log(response);
            },
            timeout: 2000 //Opcional
        });
    }

});