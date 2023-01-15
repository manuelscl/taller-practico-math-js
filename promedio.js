function calcularPromedio(lista) {
    // let sumarLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumarLista = sumarLista += lista[i];
    // }
    function sumarTodosElementos(valorAcumulado, valorActual) {
        return valorAcumulado + valorActual;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    
    return promedio;
}