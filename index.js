process.argv.splice(0, 2);
let argumentos = process.argv;

let comando = argumentos[0];

switch (comando) {
    case "buscar":
        let id = argumentos[1];
        let usuario = usuarios.find((usuario) => usuario.id == id);
        usuario ? console.log(usuario) : console.log("Usuario no encontrado.");

        break;
    case "todos":
        usuarios.forEach((usuario) => {
            let { id, nombre, apellido, edad } = usuario;
            let texto = `ID: ${id} - Nombre: ${nombre} - Apellido: ${apellido} - Edad: ${edad}`;
            console.log(texto);
        });
        break;
    case "agregar":
        let nuevoUsuario = {
            id: uuid().slice(0, 6),
            nombre: argumentos[1],
            apellido: argumentos[2],
            edad: Number(argumentos[3]),
        };
        usuarios.push(nuevoUsuario);
        console.log("Su lista de usuarios se actualizó:");
        console.table(usuarios);

        break;
    case "eliminar":
        let idEliminar = argumentos[1];
        let index = usuarios.findIndex((usuario) => usuario.id == idEliminar);
        usuarios.splice(index, 1);
         console.log("Su lista de usuarios se actualizó:");
         console.table(usuarios);
        break;
    case "actualizar":
        break

    default:
        console.log("Comando no válido.");
        break;
}