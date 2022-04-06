let form = document.getElementById("form");

form.addEventListener("submit", enviarDatos);

function enviarDatos(e){
    e.preventDefault();
    let dato = e.target

    console.log([dato.children[2].value])
    console.log([dato.children[3].value])
    console.log([dato.children[4].value])
    console.log([dato.children[5].value])
}