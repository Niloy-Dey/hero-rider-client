function vaxTrail(arr) {
    const A = [], B = [], C = [], D = [];

    let count = 0;
    while (count < arr.length) {
        const { name, age, temperature } = arr[count];
        if (age >= 20 && age <= 30 && temperature < 100) {
            A.push({ name, age, temperature });
        } else if (age >= 31 && age <= 40 && temperature < 100) {
            B.push({ name, age, temperature });
        } else if (age >= 41 && age <= 50 && temperature < 100) {
            C.push({ name, age, temperature });
        } else if (temperature >= 100) {
            D.push({ name, age, temperature });
        }
        count++;
    }

    A.sort((a, b) => a.age - b.age);
    B.sort((a, b) => a.age - b.age);
    C.sort((a, b) => a.age - b.age);
    D.sort((a, b) => a.age - b.age);

    return { A, B, C, D };
}
var a = vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 31, temperature: 98 },
    { name: 'Bip', age: 43, temperature: 101 },
    { name: 'jadu', age: 41, temperature: 102 },
    { name: 'Tom', age: 50, temperature: 95 },
])
console.log(a)