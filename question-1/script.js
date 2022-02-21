/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const fs = require('fs');

const args = process.argv.slice(-1);

function fibonacci(N) {
    if (N < 3)
        return N;

    let a = 1, b = 2, c;

    for (let i = 0; i < N - 2; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

function crearArchivo(solucion) {
    fs.writeFileSync('./question-1/output.txt', solucion.toString(), (err) => {
        if (err) throw err;
    });
}

function main() {
    crearArchivo(fibonacci(args));
}

main();