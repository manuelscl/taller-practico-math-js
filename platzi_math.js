function esPar(lista) {
    return !(lista.length % 2);
}
function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if(listaEsPar) {
        //es par
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        const mitad1ListaPar = lista[indexMitad1ListaPar];
        const mitad2ListaPar = lista[indexMitad2ListaPar];

        const listaMitades = [mitad1ListaPar, mitad2ListaPar];

        return calcularPromedio(listaMitades);
    } else {
        // es impar
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[indexMitadListaImpar];
        
        return medianaImpar;
    }
}
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
    const moda = ultimaPosicion[0];

    return moda;
}
function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, valorActual) {
        return valorAcumulado + valorActual;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    
    return promedio;
}
function ordenarLista(listaDesordenada) {
    function ordenarListaSort(a, b) {
        return a - b;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarLista(valorAcumulado, valorActual) {
        return valorAcumulado[i] - valorActual[i];
    }

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}