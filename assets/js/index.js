var btnRegistro=document.getElementById("btn_registrar");
console.log(btnRegistro);

function irARegistro(){
    window.location.href="./registro.html";
}

btnRegistro.addEventListener("click",irARegistro);

$("#btn_ingresar").click(function(){

    formLogin = document.getElementById("login");

    if(!formLogin.checkValidity()){
        $("#mensajeError").text("Todos los campos son obligatorios");
    }else{
        $.ajax({
            type: 'GET',
            //dataType: 'json', //Opcional
            //contentType: 'application/json', //Opcional
            url: 'http://localhost/poliparqueo_back/servicios/usuarios.php',
            data: $("#login").serialize(),
            success: function(response){
                if(response.result == true){
                    localStorage.setItem("index", response.id);
                    localStorage.setItem("permisos", response.permisos);
                    if(response.permisos == 1){
                        window.location.href="./ppal_adm.html";
                    }else{
                        window.location.href="./ppal_usu.html";
                    }
                }else{
                    $("#mensajeError").text("Usuario o contraseña incorrecto");
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



