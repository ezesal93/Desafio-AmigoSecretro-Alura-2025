let listaAmigos = [];





function agregarAmigo() {
    //Alacena el nombre ingresado
    let nombreIngresado =  document.getElementById("amigo").value;

    if (nombreIngresado == "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Agregar nombre
        listaAmigos.push(nombreIngresado);
        document.getElementById("amigo").value = "";
    }
    //Llama al a función mostrarLista
    mostrarListaAmigos();

    return;
}


function mostrarListaAmigos(){
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = "";

    listaAmigos.forEach(function (elemento) {
    });
}


