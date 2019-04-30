const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crear la tabla de multiplicar con la base proporcionada y el limite establecido', options)
    .help()
    .argv;

module.exports = {
    argv
};