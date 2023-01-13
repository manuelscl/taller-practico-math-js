const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#discount');
const btnCalcular = document.querySelector('#btn-calculate');
const result = document.querySelector('#result');

btnCalcular.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    let precio = Number(inputPrice.value);
    let descuento = Number(inputDescuento.value);
    let cupon = inputDescuento.value;

    let precioConDescuento = (precio * (100 - descuento)) /100;

    if(!precio || !cupon) {
        result.innerText = "Llena el formulario";
        return;
    } else if(descuento > 100) {
        result.innerText = 'No hay un descuento arriba de 100';
        return;
    }

    switch (cupon) {
        case 'cupon1':
            descuento = 10;
        break;
        case 'cupon2':
            descuento = 20;
        break;
        case 'cupon3':
            descuento = 30;
        break;
        case 'cupon4':
            descuento = 40;
        break;
        default:
            result.innerText = 'Cupón no válido';
        return;
    }
    // if(cupon === 'Cupon1') {
    //     descuento = 10;
    // } else if(cupon === 'Cupon2') {
    //     descuento = 20;
    // } else if(cupon === 'Cupon3') {
    //     descuento = 30;
    // } else {
    //     result.innerText = 'Cupón no válido';
    //     return;
    // }
    result.innerText = "Tu precio con descuento es " + precioConDescuento;
}