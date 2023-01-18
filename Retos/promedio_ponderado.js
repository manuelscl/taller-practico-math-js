const notas = [
    {   
        curso: 'Educación fisica',
        nota: 10,
        credito: 2,
    },
    {
        curso: 'Programación',
        nota: 8,
        credito: 5,
    },
    {
        curso: 'Finanzas personales',
        nota: 7,
        credito: 5,
    }
];

const notasConCreditos = notas.map((elemento) => {
    return elemento.nota * elemento.credito;
});

const creditos = notas.map((elemento) => elemento.credito);

const sumaDeNotasYCreditos = notasConCreditos.reduce((valorAcumulado = 0, valorActual) => valorAcumulado + valorActual);
const sumaDeCreditos = creditos.reduce((valorAcumulado = 0, valorActual) => valorAcumulado + valorActual);


const promedioPonderado = sumaDeNotasYCreditos / sumaDeCreditos;