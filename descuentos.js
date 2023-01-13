const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#discount');
const btnCalcular = document.querySelector('#btn-calculate');
const resultado = document.querySelector('#result');

btnCalcular.addEventListener('click', calcularDescuento);

// const cuponesObj = {
//     'cupon1': 10,
//     'cupon2': 20,
//     'cupon3': 30,
//     'cupon4': 40,
// };

const cuponesLista = [];
cuponesLista.push({
    nombre: 'cupon1', descuento: 10,
});
cuponesLista.push({
    nombre: 'cupon2', descuento: 20,
});
cuponesLista.push({
    nombre: 'cupon3', descuento: 30,
})
cuponesLista.push({
    nombre: 'cupon4', descuento: 50,
})


function calcularDescuento() {
    const precio = Number(inputPrice.value);
    const cupon = inputDescuento.value;
    let descuento;

    if(!precio || !cupon) {
        result.innerText = "Llena el formulario";
        return;
    }

    function hayCupon(elemento) {
        return elemento.nombre === cupon;
    }
    // const cuponesEnLista = cuponesLista.filter(hayCupon);
    const cuponesEnLista = cuponesLista.find(hayCupon);

    // if(cuponesEnLista.length > 0) {
    //     descuento = cuponesEnLista[0].descuento; 
    // }

    if(cuponesEnLista){
        descuento = cuponesEnLista.descuento;
    }
    else {
        resultado.innerText = 'Cupón no válido';
        return;
    }

    console.log({
        cupon,
        descuento,
        cuponesEnLista,
        cuponesLista,    
    })

    // if(cuponesObj[cupon]) {
    //     descuento = cuponesObj[cupon];
    // } else if(!cuponesObj[cupon]) {
    //     resultado.innerText = 'Cupon no válido';
    //     return;
    // }

    let precioConDescuento = (precio * (100 - descuento)) /100;

    // switch (cupon) {
    //     case 'cupon1':
    //         descuento = 10;
    //     break;
    //     case 'cupon2':
    //         descuento = 20;
    //     break;
    //     case 'cupon3':
    //         descuento = 30;
    //     break;
    //     case 'cupon4':
    //         descuento = 40;
    //     break;
    //     default:
    //         resultado.innerText = 'Cupón no válido';
    //     return;
    // }

    // if(cupon === 'Cupon1') {
    //     descuento = 10;
    // } else if(cupon === 'Cupon2') {
    //     descuento = 20;
    // } else if(cupon === 'Cupon3') {
    //     descuento = 30;
    // } else {
    //     resultado.innerText = 'Cupón no válido';
    //     return;
    // }

    resultado.innerText = "Tu precio con descuento es " + precioConDescuento;
}