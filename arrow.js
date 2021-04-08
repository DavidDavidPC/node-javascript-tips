const b = 9;
const c = 3;
console.log(b);
const a = (b) => {
    console.log(b);
    console.log(c);
}
a(b);

function name(params) {
    console.log(c);
}

name();