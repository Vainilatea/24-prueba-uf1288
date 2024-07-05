let bytes_a_comprobar = [
    [1, 0, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1]
];

function verificarParidad(bytes) {
    let paridadCorrecta = true;

    bytes.forEach((fila, index) => {
        let suma = 0;
        for (let i = 0; i < fila.length - 1; i++) {
            suma += fila[i];
        }
        
        let paridadCalculada = suma % 2;  // 0 si es par, 1 si es impar
        let paridadActual = fila[fila.length - 1];

        if (paridadCalculada !== paridadActual) {
            console.log(`La paridad es incorrecta en la fila ${index + 1}`);
            paridadCorrecta = false;
        }
    });

    if (paridadCorrecta) {
        console.log("Todas las filas tienen la paridad correcta.");
    }
}

verificarParidad(bytes_a_comprobar);
