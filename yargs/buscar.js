const operaciones = require("./utils/utils.js");
const opcionesBuscar = {
    id: {
        describe: "Argumento que recibe el id del usuario a buscar",
        demand: false,
        alias: "i",
    },
};
const buscar = async (argumentos) => {
    try {
        let id = argumentos.id;
        if (id) {
            let usuario = await operaciones.buscarPorId(id);
            console.log(usuario);
        } else {
            let usuarios = await operaciones.buscar();
            console.log(usuarios);
        }
    } catch (error) {
        console.log(error);
    }
};

let configBuscar = {
    opciones: opcionesBuscar,
    callback: buscar,
};

module.exports = configBuscar;
