const argv = require('yargs')
                .option('b', {      // creamos una opcion/bandera
                    alias: 'base',
                    type: 'number',
                    demandOption: true,      //required
                    describe: 'Es la base de la tabla de mutltiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,      //no required
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,      //no required
                    default: 10,    //valor por defecto
                    describe: 'Es el limite de hasta donde debe hacer la multiplicacion'
                })
                .check( (argv, options) => {    // creamos una validacion, en este caso para q base/b sea un number
                    if( isNaN(argv.b)) throw 'la base tiene que ser un numero'
                    return true;
                })
                .argv;

module.exports = argv