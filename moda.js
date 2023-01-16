function calcularModa(lista) {
    const listaCount = {};

    for(let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const ultimaPosicion = listaOrdenada[listaOrdenada.length - 1];
    // console.log({listaCount, listaArray, listaOrdenada, ultimaPosicion});
    // console.log('La moda es: ' + ultimaPosicion[0]);
    const moda = ultimaPosicion[0];

    return moda;
}

function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarLista(valorAcumulado, valorActual) {
        return valorAcumulado[i] - valorActual[i];
    }

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}