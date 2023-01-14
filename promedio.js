function calcularPromedio(lista) {
    // let sumarLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumarLista = sumarLista += lista[i];
    // }
    const sumarElementos = (valorAcumulado, valorActual) => valorAcumulado + valorActual;

    const sumaLista = lista.reduce(sumarElementos);
    const promedio = sumaLista / lista.length;
    
    return promedio;
}