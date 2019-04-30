const colors = require('colors');
const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un numero`);
            return;
        }

        console.log("===========================".green);
        console.log(`==== TABLA DEL ${base} ====`.green);
        console.log("===========================".green);


        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {

    console.log("===========================".green);
    console.log(`======= TABLA DEL ${base} =======`.green);
    console.log("===========================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
}