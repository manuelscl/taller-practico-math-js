console.group('CUADRADO');
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.log(calcularCuadrado(5));
console.groupEnd('CUADRADO');

console.group('TRIANGULO');
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}
console.log(calcularTriangulo(6,6,4,5.5));
console.groupEnd('TRIANGULO');