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
console.log(dateParts);
// month is 0-based, that's why we need dataParts[1] - 1
const dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0] + 1); 
console.log(dateObject);