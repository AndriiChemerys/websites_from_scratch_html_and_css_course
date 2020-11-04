// find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find((score) =>  score > 50);

scores.sort((a,b) => a - b);
console.log(scores);

console.log(firstHighScore);

// sorting objects

const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70},
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);

// Chaining Array Methods

const products = [
    {name: 'mario', price: 20},
    {name: 'luigi', price: 10},
    {name: 'chun-li', price: 50},
    {name: 'yoshi', price: 30},
    {name: 'shaun', price: 70},
];

// const filtered = products.filter(product => product.price > 20);

// console.log(filtered);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);