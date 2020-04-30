
$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null){
        window.location.href="./index.html";
    }
});