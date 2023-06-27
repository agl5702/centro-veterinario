function captura() {
    var nombrecap = document.getElementById('name').value;
    var edadcap = document.getElementById('edad').value;
    var razacap = document.getElementById('raza').value;
    var fechacap = document.getElementById('fecha').value;
    var horacap = document.getElementById('hora').value;
    var usernamecap = document.getElementById('username').value;
    if (nombrecap == "") {
        alert("El Nombre de la mascota es obligatorio");
        document.getElementById('name').focus();
    } else if (edadcap == "") {
        alert("La edad de la mascota es obligatorio");
        document.getElementById('edad').focus();
    } else if (razacap == "") {
        alert("La raza de la mascota es obligatorio");
        document.getElementById('raza').focus();
    } else if (fechacap == "") {
        alert("La fecha de la mascota es obligatorio");
        document.getElementById('fecha').focus();
    } else if (horacap == "") {
        alert("La hora de la mascota es obligatorio");
        document.getElementById('hora').focus();
    } else if (usernamecap == "") {
        alert("La edad de la mascota es obligatorio");
        document.getElementById('username').focus();
    } else {

        console.log(nombrecap, "\n", edadcap, "\n", razacap, "\n", fechacap, "\n", horacap, "\n", usernamecap);
        document.getElementById('name').value = "";
        document.getElementById('edad').value = "";
        document.getElementById('raza').value = "";
        document.getElementById('fecha').value = "";
        document.getElementById('hora').value = "";
        document.getElementById('username').value = "";
    }




}