let myScores = [92, 98, 84, 76, 89, 99];
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
//console.log(averageOfArray)

let myAverage = getAverage(yourScores);
//console.log(myAverage)

myScores.sort(function (a, b) {
    return a - b;
});

yourScores.sort(function (a, b) {
    return a - b;
}) 

function getMedian(scores) {

    let lengthOfArray = scores.length;

    if (lengthOfArray % 2 == 1) {
        // if length is odd
        return scores[(lengthOfArray / 2) - .5]; // since its odd it will have a remainder someNum.5 we just subtract that .5;
    } else {
        //if length is even
        return (scores[lengthOfArray / 2] + scores[(lengthOfArray / 2) - 1]) / 2; // average of two numbers
    }

}

let medianScore = getMedian(myScores);
let medianScoreOdd = getMedian(yourScores)
console.log(medianScore) // average
console.log(medianScoreOdd)
console.log("Highest Score: " + myScores[myScores.length - 1])
console.log("Lowest Score: " + myScores[0])

