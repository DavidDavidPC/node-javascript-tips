//Array vacío
const arr = [];
console.log(arr);

//Array con valores
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

//Array con diferentes tipos de datos
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ]; // arr containing different data types
  console.log(arr);

  //Array usando split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//Crear array con valores predeterminados
const arr = Array(8).fill('x');
console.log(arr); //['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

//Crear un array concatenando otros
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//Crear un array con elementos de otro
const miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
const miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997'];
const nuevoCoche = miCoche.slice(0, 2);
console.log(nuevoCoche);