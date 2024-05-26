let cont = 0;

const $h1 = document.querySelector("h1");
const $button = document.getElementById("restar");
$h1.textContent = cont;

function sumar(valor) {

    if (valor === 0) {
        cont = 0;
        $h1.textContent = cont;
        return;
    }

    cont += valor;
    
    if (cont < 0) cont = 0

    $h1.textContent = cont;
}