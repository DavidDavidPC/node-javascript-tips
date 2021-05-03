/**
 * Cuando copiamos los valores de un objeto a otras variables, lo que estamos copiando realmente es la referencia a dicho objeto, por lo que si modificamos la copia modificamos también el original.
 */

let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
}

let davidpc = persona;
davidpc.nombre = 'David';

console.log(davidpc.nombre); // David

console.log(persona.nombre); // David ???

/**
 * Para evitar esto se usa Object.assign
 */

let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
}

let davidpc = Object.assign({} , persona);
davidpc.nombre = 'David';

console.log(davidpc.nombre); // David

console.log(persona.nombre); // Nombre por defecto

/**
 * También se puede usar spread
 */

 let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
}

let davidpc = {...persona};
davidpc.nombre = 'David';

console.log(davidpc.nombre); // David

console.log(persona.nombre); // Nombre por defecto

/**
 * Pero, ¿qué ocurre si el objeto tiene a su vez dentro más objetos? Pues que usamos JSON.parse y JSON.stringify
 */

let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
    mascota: {
            nombre: 'Mascota por defecto',
            edad: 0,
    }
}

let davidpc = Object.assign({} , persona);
davidpc.mascota.nombre = 'Chacarron';

console.log(davidpc.mascota.nombre); // 'Chacarron'

console.log(persona.mascota.nombre); // 'Chacarron' ???????

/**
 * Usando JSON.parse y stringify
 */

let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
    mascota: {
            nombre: 'Mascota por defecto',
            edad: 0,
    }
}

let davidpc = JSON.parse(JSON.stringify(persona));
davidpc.mascota.nombre = 'Chacarron';

console.log(davidpc.mascota.nombre); // 'Chacarron'

console.log(persona.mascota.nombre); // 'Mascota por defecto' ???????