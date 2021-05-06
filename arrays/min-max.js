/**
 * La función Math.max() devuelve el mayor de cero o más números.
 * La función Math.min() devuelve el menor de cero o más números.
 * Usando spread podemos obtener el mayor o menor de los númoros contenidos en un array.
 */

const nums = [1,2,3,4,5,6,7,8];
console.log(Math.max(1,4,7,9));
console.log(Math.max(...nums));
console.log(Math.min(...nums));