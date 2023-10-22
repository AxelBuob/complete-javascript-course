let scoreDolphins = [96, 108, 89];
let scoreKoalas = [88, 91, 110];


function average(score) {
    let average = 0;
    let length = score.length;
    score.forEach((element) => {
        average += element;
    })
    return average / length;
}

let averageDolphins = average(scoreDolphins);
let averageKoalas = average(scoreKoalas);

console.log(averageDolphins);
console.log(averageKoalas);

if (averageDolphins > averageKoalas) {
    console.log("Dolphins win the trophy");
} else if (averageDolphins < averageKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}