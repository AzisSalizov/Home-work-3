let scores = [40, 55, 22, 89, 14, 78, 56, 47, 59];

let convertedScores = [];
for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let convertedScore;

    if (score < 20) {
        convertedScore = 1;
    } else if (score < 40) {
        convertedScore = 2;
    } else if (score < 60) {
        convertedScore = 3;
    } else if (score < 80) {
        convertedScore = 4;
    } else {
        convertedScore = 5;
    }

    convertedScores.push(convertedScore);
}

console.log("Оценки в 5-бальной системе:", convertedScores);
