/**
 * Eliminar valores duplicados de un array.
 */

const array = [1,1,3,4,4,5];
const array_unico = [...new Set(array)];
console.log(array_unico);