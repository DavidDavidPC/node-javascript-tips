const obj = {
    prop1: "propiedad 1",
    method1: () => {
        return 'Imprime';
    }
};

// console.log(obj.prop1);
// const str = obj.method1();
// console.log(str);

/**
 * Recorrer un objeto
 */

 for (const property in obj) {
   console.log(`${property}: ${object[property]}`);
 }

 /**
  * Ver el objeto en consola
  */
  console.log(JSON.stringify(object).toString());