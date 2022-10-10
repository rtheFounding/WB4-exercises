let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scores) {
    totalScores = 0;
    for (let i = 0; i < scores.length; i++) {   
        totalScores += scores[i];
    }
    let averageOfScores = totalScores / scores.length;
    return averageOfScores.toFixed(2);
}

let averageOfArray = getAverage(myScores);
console.log(averageOfArray)

let myAverage = getAverage(yourScores);
console.log(myAverage)


