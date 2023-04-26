const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();

console.log(process.argv);  // muestra las opciones/banderas desde argv(dependencia de node)
console.log(argv)   //mmuestra las opcines usando yargs (un objeto, para ser mejor manipulado)

console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l, argv.h)        // la funcion se ejecuta con la bandera (argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));
