// class PlatziMath {
//     static esPar() {}
//     static calcularMediana() {}
//     static calcularModa () {}
// }
const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}
PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar) {
        //es par
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        const mitad1ListaPar = lista[indexMitad1ListaPar];
        const mitad2ListaPar = lista[indexMitad2ListaPar];

        const listaMitades = [mitad1ListaPar, mitad2ListaPar];

        return PlatziMath.calcularPromedio(listaMitades);
    } else {
        // es impar
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[indexMitadListaImpar];
        
        return medianaImpar;
    }
}
PlatziMath.calcularModa = function calcularModa(lista) {
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
    const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1);
    const ultimaPosicion = listaOrdenada[listaOrdenada.length - 1];
    const moda = ultimaPosicion[0];

    return moda;
}
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, valorActual) {
        return valorAcumulado + valorActual;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    
    return promedio;
}
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(a, b) {
        return a - b;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarLista(valorAcumulado, valorActual) {
        return valorAcumulado[i] - valorActual[i];
    }

    const lista = listaDesordenada.sort(ordenarLista);
    return lista;
}