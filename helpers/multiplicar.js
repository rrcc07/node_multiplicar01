const fs = require('fs');
const colors = require( 'colors' );
//tabla de 'base'
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        
        for(let i=1; i<=hasta; i++){
            salida += ` ${base} x ${i} = ${ i * base}\n`;
        }

        if (listar) {
            console.log(`==============`.green);
            console.log(`TABLA DEL:`.green, colors.blue( base ));
            console.log(`==============`.green)
            console.log(salida) ;
        } 

        // 'fs' nos ayuda a grabar un doc. (se debe ingresar el path, nombre archivo, lo q se grabara, error)
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
        })
        // fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) ====> esto funciona igual, pero se debe tratar en try-catch para los errores
        return `tabla-${base}.txt`

    } catch (error) {
        return error;
    }


}

//exportar
module.exports = {
    crearArchivo: crearArchivo
}