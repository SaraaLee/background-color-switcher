
// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button'); // NodeList, especie de array
const body = document.querySelector('body');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", pintarFondo);
// }

// recorre todo el array de botones. Para cada botón añade un evento 'click'
buttons.forEach(button => {
    button.onclick = pintarFondo;
});


function pintarFondo(event) {
    document.body.style.backgroundColor = event.target.id;
}