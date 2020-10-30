const [a, b, ...numbers] = process.argv;
const numbers2 = numbers.map(x => Number(x))
let sum=0;
for (let i=0; i<numbers.length; i++) {
    sum = sum + numbers2[i];
}
console.log(sum);