const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


//console.log(process);
//nodemon app --base=5
//console.log(process.argv);

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];
// console.log(argv.base);
// console.log(argv.limite);

//console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch(console.log);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}