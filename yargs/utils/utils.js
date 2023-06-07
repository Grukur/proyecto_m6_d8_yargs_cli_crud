const fs = require("fs/promises");
const { v4: uuid } = require("uuid");

const buscar = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let usuarios = await fs.readFile(
                "./yargs/db/usuarios.json",
                "utf8"
            );
            resolve(JSON.parse(usuarios));
        } catch (error) {
            reject("Error al leer los usuarios");
        }
    });
};

const buscarPorId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataJON = await fs.readFile("./yargs/db/usuarios.json", "utf8");
            let data = JSON.parse(dataJON);
            let usuario = data.usuarios.find((usuario) => usuario.id == id);
            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuario no encontrado.");
            }
        } catch (error) {
            console.log(error);
            reject("Error al leer los usuarios");
        }
    });
};

const eliminar = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataJON = await fs.readFile("./yargs/db/usuarios.json", "utf8");
            let data = JSON.parse(dataJON);
            data.usuarios = data.usuarios.filter((usuario) => usuario.id != id);
            await fs.writeFile("./yargs/db/usuarios.json", JSON.stringify(data, null, 4), "utf8");
            resolve(data);            
        } catch (error) {
            console.log(error);
            reject("Error al leer los usuarios");
        }
    });
};

const agregar = (nombre, apellido, edad) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await buscar();
            let nuevoUsuario = {
                id: uuid().slice(0, 6),
                nombre,
                apellido,
                edad: Number(edad),
            };
            data.usuarios.push(nuevoUsuario);
            await fs.writeFile(
                "./yargs/db/usuarios.json",
                JSON.stringify(data, null, 4),
                "utf8"
            );

            resolve(data);
        } catch (error) {
            reject("Error al crear el nuevo usuario");
        }
    });
};

const modificar = (id, nombre, apellido, edad) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await buscar();
            let found = data.usuarios.find(usuario => usuario.id == id)
            if(found){
                found.nombre = nombre
                found.apellido = apellido
                found.edad = Number(edad)
            }
            await fs.writeFile( "./yargs/db/usuarios.json", JSON.stringify(data, null, 4), "utf8");
            resolve(data);

        } catch (error) {
            reject("Error al modificar el usuario");
        }
    });
};

let operaciones = {
    buscar,
    agregar,
    buscarPorId,
    eliminar,
    modificar,
};

module.exports = operaciones;
