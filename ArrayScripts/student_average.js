let students = [
    { name: "Randy", scores: [100, 96, 99, 92] },
    { name: "Boba", scores: [92, 89, 96, 100, 94] },
    { name: "Jason", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Chad", scores: [89, 100] },
    { name: "Dianai", scores: [100, 99, 100, 87] }
];

let numOfStudents = students.length;
for (let i = 0; i < numOfStudents; i++) {
    console.log("Students : " + students[i].name)
    totalScore = 0;
    for (let j = 0; j < students[i].scores.length; j++) {
        totalScore += students[i].scores[j]
        console.log("Scores :" + students[i].scores[j]);
    }
    let average = totalScore /  students[i].scores.length;
    console.log("Total: " + totalScore)
    console.log("Average: " + average)
}





