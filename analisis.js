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

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoDeSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoDeSalario;

    console.log({
        porcentajesCrecimiento,
        medianaPorcentajesCrecimiento,
        ultimoSalario,
        aumentoDeSalario,
        nuevoSalario,
    });
}