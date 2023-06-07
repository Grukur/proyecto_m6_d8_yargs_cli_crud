const operaciones = require("./utils/utils.js");

let opcionesAgregar = {
    nombre: {
        describe: "Argumento que recibe nombre",
        demand: true,
        alias: "n",
    },
    apellido: {
        describe: "Argumento que recibe apellido",
        demand: true,
        alias: "a",
    },
    edad: {
        describe: "Argumento que recibe la edad",
        demand: true,
        alias: "e",
    },
};

const agregar = async (argumentos) => {
    try {
        let { nombre, apellido, edad } = argumentos;

        let respuesta = await operaciones.agregar(nombre, apellido, edad);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

let configAgregar = {
    opciones: opcionesAgregar,
    callback: agregar,
};

module.exports = configAgregar;
