// Cambiar elementos de un array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20
console.log(numbers); // [10, 20, 3, 4, 5]

// Convertir array a string
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// Eliminar un elemento desde el índice 3. Modifica el array original.
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
console.log(myFish); // ["angel", "clown", "drum", "sturgeon"]
console.log(removed); // ["mandarin"]

// Eliminar 1 elemento desde el índice 2 e insertar "trumpet". Modifica el array original.
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');
console.log(myFish); // ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed); // ["drum"]

//Añadir elemento al final
const arr = ['item1', 'item2', 'item3'];
arr.push('new item');
console.log(arr);

//Eliminar elemento del final
const arr = ['item1', 'item2', 'item3'];
arr.pop('new item');
console.log(arr);

//Eliminar elemento del inicio
const arr = ['item1', 'item2', 'item3'];
arr.shift('new item');
console.log(arr);

//Revertir el orden del array
const arr = ['item1', 'item2', 'item3'];
arr.reverse('new item');
console.log(arr);

//Ordenar array
const arr = ['item5', 'item2', 'item3'];
arr.sort();
console.log(arr);