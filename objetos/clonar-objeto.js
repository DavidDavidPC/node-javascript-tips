/**
 * Cuando copiamos los valores de un objeto a otras variables, lo que estamos copiando realmente es la referencia a dicho objeto, por lo que si modificamos la copia modificamos también el original.
 */

 let persona = {
    nombre: 'Nombre por defecto',
    edad: 0,
}

let juandc = persona
juandc.nombre = 'Juan David'

console.log(juandc.nombre) // Juan David

console.log(persona.nombre) // Juan David ???