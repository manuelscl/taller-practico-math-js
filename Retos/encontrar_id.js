class Usuario {
    constructor(usuario, id) {
        this.name = usuario;
        this.id = id;
    }
}

const listaDePersonas = [new Usuario('John', 980), new Usuario('Alex', 700)];

function encontrarPersona(usuario, id) {
    const encontrarPorId = usuario.find((elemento) => {
        return elemento.id == id;
    });

    if(encontrarPorId) {
        return encontrarPorId.name;
    } else {
        return false;
    }
}