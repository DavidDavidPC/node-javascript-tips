const obj = {
    prop1: "propiedad 1",
    prop2: "propiedad 2",
    prop3: "propiedad 3",
    prop4: "propiedad 4",
    method1: () => {
        return 'Imprime';
    }
};

console.log(obj.prop1);
const str = obj.method1();
console.log(str);

/**
 ** Recorrer un objeto. Se puede poner for await si queremos que sea todo síncrono. (si dentro tenemos awaits)
 */

for (const property in obj) {
  console.log(`${property}: ${object[property]}`);
}

/**
* Ver el objeto en consola
*/
console.log(JSON.stringify(object).toString());

/**
 * Quitar una propiedad de un objeto
 * Crea una copia del objeto original dejando el original como estaba.
 */

const {prop1, ...nuevoObjeto} = obj;
console.log(nuevoObjeto);

//Comprobar si el objeto está vacío
Object.entries(obj).length === 0;
console.log(Object.entries(obj).length === 0); //false
