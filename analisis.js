console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
    // const persona = salarios.find((persona) => {
        //     return persona.name == personaEnBusqueda;
        // })
        // return persona;
    return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map((elemento) => {
        return elemento.salario;
    })
    console.log(salarios)
    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}