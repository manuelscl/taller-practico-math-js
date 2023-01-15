function esPar(lista) {
    // if(lista.length % 2) {
    //     return false;
    // } else {
    //     return true;
    // }
    return !(lista.length % 2);
}
function esImpar(lista) {
    return (lista.length % 2);
}

function calcularMediana(lista) {
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