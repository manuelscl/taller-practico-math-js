// Cuadrado
console.group('CUADRADO');
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.log(calcularCuadrado(5));
console.groupEnd('CUADRADO');

// Triángulo
console.group('TRIANGULO');

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriagulo(lado1, base) {
    if(lado1 === base) {
        console.warn('Este no es un triángulo isósceles')
    } else {
        const altura = Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
        return {altura}
    }
}

function AlturaTriaguloEscaleno(lado1, lado2, lado3) {

    if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('no puede haber lados iguales');
    } else {
        const S = (lado1 + lado2 + lado3) / 2;
        const primerLado = S - lado1;
        const segundoLado = S - lado2;
        const tercerLado = S - lado3;
    
        let altura = (2 / lado1) * Math.sqrt(S * primerLado * segundoLado * tercerLado);
        altura = Math.floor(altura);
    
        // console.log({
        //     S,
        //     primerLado,
        //     segundoLado,
        //     tercerLado,
        //     altura,
        //     result,
        // })
        return {altura};
    }
}
console.log(calcularTriangulo(6,6,4,5.5));
console.log(calcularAlturaTriagulo(6,4));

console.groupEnd('TRIANGULO');

// Círculo
console.group('CIRCULO');

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}
console.log(calcularCirculo(20));

console.groupEnd('CIRCULO');
