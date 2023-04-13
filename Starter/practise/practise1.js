/* code 1:

    const scoreDolphins = (96 + 108 + 89);
    const scoreKoalas = (96 + 108 + 89);

    console.log(scoreDolphins);
    console.log(scoreKoalas);

    const avgScoreDolphins = scoreDolphins / 3;
    console.log(avgScoreDolphins);
    const avgScoreKoalas = scoreKoalas / 3;
    console.log(avgScoreKoalas);

    if (avgScoreDolphins > avgScoreKoalas) {
        console.log('the winner is dolphin team');
    } else if (avgScoreDolphins === avgScoreKoalas) {
        console.log('the match draw');
    } else {
        console.log('winner is koalas team');
    }

*/

/*

    code 2:
    const scoreDolphins = (97 + 112 + 101) / 3;
    const scoreKoalas = (109 + 95 + 123) / 3;

    console.log(scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log('the winner is dolphin team');
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
        console.log('winner is koalas team');
    } else {
        console.log('the match draw');
    }

*/
/* 

const scoreDolphins = (97 + 112 + 11) / 3;
const scoreKoalas = (109 + 95 + 16) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('the winner is dolphin team');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('winner is koalas team');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('both win trophy');
} else {
    console.log('no one win the trophy');
}    

*/

const calcAvg = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAvg(44, 23, 71);
const scoreKoalas = calcAvg(65, 54, 49)


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`No team wins ${avgDolphins} and ${avgKoalas}`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);