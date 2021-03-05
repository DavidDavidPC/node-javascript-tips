const a = () => {
    let promesa = new Promise((resolve, reject) => {
        const b = 'funciona';
        resolve(b);
        reject('Error');
    });

    return promesa;
}

a()
.then(r => {
    console.log(r);
})
.catch(e => {
    console.log(e);
})