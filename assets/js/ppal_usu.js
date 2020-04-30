
$(document).ready(function(){
    var permisos = localStorage.getItem("permisos");
    if(permisos == null || permisos == "1"){
        window.location.href="./index.html";
    }
});