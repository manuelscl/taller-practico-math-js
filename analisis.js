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
    // console.log(salarios)
    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    // console.log(medianaSalarios);
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

const empresas = {};

let company;
for(persona of salarios) {
    for(trabajo of persona.trabajos) {
        company = trabajo.empresa;
        if(!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if(!empresas[nombre][year]) {
        console.warn('La empresa no dió salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if(!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        console.log({listaMedianaYears});

        let porcentajesCrecimiento = [];

        for(let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumentoDeSalario = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevoSalario = ultimaMediana + aumentoDeSalario;
    }
}

function medianaGeneral() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    console.log({listaMedianas, mediana});
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.splice(limite, medianasOrdenadas.length);

    console.log({listaMedianas, medianasOrdenadas, top10});
}