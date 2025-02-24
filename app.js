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
    document.getElementById("resultado").innerHTML = "";

    listaAmigos.forEach(function (nombreAmigo) {
        let nuevoElemento = document.createElement("li"); // Crear un <li>
        nuevoElemento.textContent = nombreAmigo; // Asignar el nombre al <li>
        listaActualizada.appendChild(nuevoElemento); // Agregar el <li> a la lista
    });

    console.log("Lista de amigos actualizada:", listaAmigos);
}


function sortearAmigo(){
    if (listaAmigos.length === 0){
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista.";
        return;
    } else {
        generarIndice()
        let amigoSorteado = listaAmigos[numeroGenerado];
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    }

}

function generarIndice() { 
    let numeroGenerado = (Math.floor(Math.random()*(listaAmigos.length)));
    return numeroGenerado;
}


