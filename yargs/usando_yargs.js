const yargs = require("yargs");
const configAgregar = require("./agregar");
const configBuscar = require("./buscar");
const configEliminar = require("./eliminar");
const configModificar = require("./modificar");

const argv = yargs
    .command(
        "buscar",
        "Permite buscar todos los usuarios o por id",
        configBuscar.opciones,
        configBuscar.callback
    )
    .command(
        "agregar",
        "Permite agregar un usuario al sistema",
        configAgregar.opciones,
        configAgregar.callback
    )
    .command(
        "eliminar",
        "Permite agregar un usuario al sistema",
        configEliminar.opciones,
        configEliminar.callback
    )
    .command(
        "modificar",
        "Permite modificar un usuario al sistema",
        configModificar.opciones,
        configModificar.callback
    )
    .help()
    .locale("es").argv;
