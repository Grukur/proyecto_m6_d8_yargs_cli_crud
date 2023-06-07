const operaciones = require("./utils/utils.js");
const opcionesEliminar = {
    id: {
        describe: "Argumento que recibe el id del usuario a buscar",
        demand: false,
        alias: "i",
    },
};
const eliminar = async (argumentos) => {
    try {
        let id = argumentos.id;
        if (id) {
            let usuario = await operaciones.eliminar(id);
            console.log(usuario);
        } else {
            console.log('error')
        }
    } catch (error) {
        console.log(error);
    }
};

let configEliminar = {
    opciones: opcionesEliminar,
    callback: eliminar,
};

module.exports = configEliminar;