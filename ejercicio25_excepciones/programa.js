const fs = require('node:fs');
function writeLog(logLine) {
    fs.writeFile('./log.txt', toString(new Date) + `${logLine}\n`, err =>{
    if (err) {
       console.error(err);
    } else {
        console.log("lo he satisfactoriamente");
    }
    })
}


function sumar(sumando1, sumando2){
    //1. que recibamos 2 argumentos
    if (sumando1 ==undefined || sumando2 == undefined){
        // construir una excepcion
        // generando un error
        throw new Error("Los 2 sumandos son obligatorios");
    }
    //2. que sean numeros
    if (!(typeof sumando1 == 'number') || !(typeof sumando2 === 'number')) {
        throw new Error("Los 2 sumandos deben ser numeros")
    }
    return sumando1 + sumando2
}

try{
    // console.log("Paso 1");
    // let resultado = sumar(8);
    // console.log("Paso 2");
    // console.log(resultado);
    // console.log("Paso 3");
    let resultado = sumar(8,8);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
    writeLog(e.message);
} finally {
    console.log("hemos terminado el proceso");
}

// console.log(sumar(1, "3"));
// console.log(sumar(1));
console.log(sumar(2, 2));