const obj = {
    prop1: "propiedad 1",
    prop2: "propiedad 2",
    prop3: "propiedad 3",
    prop4: "propiedad 4",
    method1: () => {
        return 'Imprime';
    }
};

const {prop1, ...nuevoObjeto} = obj;
console.log(nuevoObjeto);