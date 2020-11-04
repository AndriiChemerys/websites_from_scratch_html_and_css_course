// find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find((score) =>  score > 50);

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