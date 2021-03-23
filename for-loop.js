/**
 * The for and for/in looping constructs give you access to the index in the array, not the actual element.
 * With the other two constructs, forEach() and for/of, you get access to the array element itself. 
 * With forEach() you can access the array index i, with for/of you cannot
 */

 const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

arr.forEach((v, i) => console.log(v));

for (const v of arr) {
    console.log(v);
}
// You can access to index using for of in this way
for (const [i, v] of arr.entries()) {
    console.log(i, v);
  }

/**
 * JavaScript arrays are objects. That means you can add string properties to your array, not just numbers.
 * for/in doesn´t ignore the non-numeric property.
 * This is why iterating through an array using for/in is generally bad practice. 
 * The other looping constructs correctly ignore the num-numeric key
 */

 arr.test = 'abc';

//
for (let i in arr) {
    console.log(arr[i]);
}
 
// Prints "a, b, c"
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}
 
// Prints "a, b, c"
arr.forEach((el, i) => console.log(i, el));
 
// Prints "a, b, c"
for (const el of arr) {
    console.log(el);
}

/**
 * forEach() and for/in skip empty elements in the array, for and for/of do not
 */

const arr = ['a', 'b', 'c'];
arr[5] = 'e';


for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}

// Prints "a, c"
arr.forEach(v => console.log(v));

// Prints "a, c"
for (let i in arr) {
    console.log(arr[i]);
}

// Prints "a, undefined, c"
for (const v of arr) {
    console.log(v);
}