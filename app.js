let listaAmigos = [];

function agregarAmigo() {
    /*Alacena el nombre ingresado y  mediante trim() elimina los espacios 
    en blanco que están al principio y al final de una cadena de texto.*/ 
    let nombreIngresado =  document.getElementById("amigo").value.trim();

    //Si el campo esta vacio al aplciar al boton añadir arroja un mensaje
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre");
    } else {
        //Agregar nombre
        listaAmigos.push(nombreIngresado);
        document.getElementById("amigo").value = "";
    }
    //Llama al a función mostrarLista
    mostrarListaAmigos();
}


function mostrarListaAmigos(){
    //Obteniene el elemento ul donde se mostrarán los amigos
    let listaActualizada = document.getElementById("listaAmigos");
    //Limpia la lista antes de actualizarla
    listaActualizada.innerHTML = "";
    /*Limpia el resultado del sorteo anterior o limpia el mensaje "no hay amigos en la lista" en 
    caso de array vacio despues de ejecutarlo*/
    document.getElementById("resultado").innerHTML = "";

    listaAmigos.forEach(function (nombreAmigo) {
        let nuevoElemento = document.createElement("li"); // Crear un <li>
        nuevoElemento.textContent = nombreAmigo; // Asignar el nombre al <li>
        listaActualizada.appendChild(nuevoElemento); // Agregar el <li> a la lista
    });

    console.log("Lista de amigos actualizada:", listaAmigos);
}


function sortearAmigo(){
    //Si no el array esta vacio genera un mensaje
    if (listaAmigos.length === 0){
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista.";
        return;
    //De lo contrario genera un número psudorandomico y llama elemento correspondiente del array
    } else {
        let numeroGenerado = (Math.floor(Math.random()*(listaAmigos.length)));
        let amigoSorteado = listaAmigos[numeroGenerado];
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    }

}

