const today1 = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString());

const today2 = new Date().toISOString().slice(0, 10);

console.log(today);

const today3 = new Date().toISOString();

console.log(today)