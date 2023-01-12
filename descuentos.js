const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#discount');
const btnCalcular = document.querySelector('#btn-calculate');
const result = document.querySelector('#result');

btnCalcular.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    let precio = Number(inputPrice.value);
    let descuento = Number(inputDescuento.value);

    if(!precio || !descuento) {
        result.innerText = "Llena el formulario";
        return;
    } else if(descuento > 100) {
        result.innerText = 'No hay un descuento arriba de 100';
        return;
    }
    let precioConDescuento = (precio * (100 - descuento)) /100;
    result.innerText = "Tu precio con descuento es " + precioConDescuento;
}