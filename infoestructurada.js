const fs = require('fs');

fs.readFile('infoestructurada.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    

    const estudiantes = JSON.parse(data);

    estudiantes.forEach(estudiante => {
        console.log(`ID: ${estudiante.id}`);
        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Edad: ${estudiante.edad}`);
        console.log(`Curso: ${estudiante.curso}`);
        console.log('----------------------');
    });
});
