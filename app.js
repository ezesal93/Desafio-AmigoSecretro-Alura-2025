let listaAmigos = [];





function agregarAmigo() {
    //Alacena el nombre ingresado
    let nombreIngresado =  document.getElementById("amigo").value;

    if (nombreIngresado == "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Agregar nombre
        listaAmigos.push(nombreIngresado);
        console.log(listaAmigos);
        document.getElementById("amigo").value = "";
    }

    return;
}
