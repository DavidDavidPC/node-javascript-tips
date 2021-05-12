const nombre = 'David';

try {
    nombre();
} catch (error) {
    console.error(`Tipo: ${error.name}`);
    console.error(`Error: ${error.message}`);
} finally {
    console.log('Esto se ejecuta siempre, haya error o no');
}

/**
 * Error personalizado.
 */
try {
    if (nombre != 'Nombre') throw new Error ("El nombre no es correcto");
} catch (error) {
    console.error(`Tipo: ${error.name}`);
    console.error(`Error: ${error.message}`);
} finally {
    console.log('Esto se ejecuta siempre, haya error o no');
}