const obj = {
    123: 'John Wick',
    456: 'Carl Johnson',
};

function convertirObjetosEnArray(obj) {
    const elementos = Object.entries(obj);
    const lista = [];

    for(let i = 0; i < elementos.length; i++) {
        lista.push({id:elementos[i][0], name:elementos[i][1]});
    }
    console.log(lista);
    // return lista;
}
convertirObjetosEnArray(obj);