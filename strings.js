const str = 'We live in a society...';
let l = '';

/**
 * Encontrar la longitud de una cadena
 */

 l = str.length;

/**
 * Encontrar una cadena dentro de otra. 
 * Devuelve la posición de la coincidencia si la encuentra y -1 en caso contrario.
 */

l = str.indexOf('ini');

/**
 * Extraer parte de una cadena desde un índice a otro.
 */

l = str.slice(0,3);

/**
 * Extraer parte de una cadena desde un índice al final.
 */

l = str.slice(3);

/**
 * Sustituir parte de una cadena por otra.
 */

l = str.replace('We', 'You');

/**
 * Poner una cadena demasiado larga en varias líneas.
 */
const a = 'Este es un ejemplo de como hacer \
que una cadena demasiado larga se pueda poner en varias líneas';

const b = 'Este es un ejemplo de como hacer' +
'que una cadena demasiado larga se pueda poner en varias líneas';

