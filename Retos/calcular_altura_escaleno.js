// Calcula la altura de un triángulo escaleno, sabiendo que miden los  lados
function calcularAlturaEscaleno(lado1, lado2, lado3) {
    if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.warn('Los lados no deben ser iguales');
    } else {
        const S = (lado1 + lado2 + lado3) / 2;
        const S1 = S - lado1;
        const S2 = S - lado2;
        const S3 = S - lado3;
    
        let altura = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
        altura = Math.floor(altura);
        return altura;
    }
}