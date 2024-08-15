let scores = [40, 55, 22, 89, 14, 78, 56, 47, 59];

function convertToFivePointScale(score) {
    if (score < 20) {
        return 1;
    } else if (score < 40) {
        return 2;
    } else if (score < 60) {
        return 3;
    } else if (score < 80) {
        return 4;
    } else {
        return 5;
    }
}

let convertedScores = scores.map(convertToFivePointScale);
console.log("Оценки в 5-бальной системе:", convertedScores);
