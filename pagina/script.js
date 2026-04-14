// Obtenemos los elementos
const modal = document.getElementById("miModal");
const btn = document.getElementById("btnAbrir");
const span = document.querySelector(".cerrar");

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en la (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Si el usuario hace clic fuera de la caja blanca, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}