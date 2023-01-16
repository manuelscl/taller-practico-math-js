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
    console.log(listaCount);
}