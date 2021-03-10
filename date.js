const today1 = new Date('05 October 2011 14:48 UTC');

// console.log(today1.toISOString());

const today2 = new Date().toISOString().slice(0, 10);

// console.log(today2);

const today3 = new Date().toISOString();

// console.log(today3)

/**
 * Pasar la fecha de dd/mm/yyyy a objeto date
 */
const dateString = "23/10/2015";
const dateParts = dateString.split("/");
const dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0] + 1); 
// console.log(dateObject);

/**
 * Completar el mes con un 0 delante
 */
const month = '8';
console.log(month.padStart(2, '0'));