/* 
function topic1: function is a value

    function logger() {
    console.log('My name is Roshan');
    }

    //calling,running,invoking function
    logger();

    function fruitProcessor(apples, oranges) {
        console.log(apples, oranges);
        const juice = `Juice with ${apples} and ${oranges} oranges.`;
        return juice;
    }

    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);

    const appleOrangeJuice = fruitProcessor(4, 2)
    console.log(appleOrangeJuice);

    const orangeJuice = fruitProcessor(0, 5);
    console.log(orangeJuice);

*/

/*  

// function decleartion
function calcAge1(birthYear) {
    // either
    // const age = 2037 - birthYear;
    // return age ;
    // or 

    return 2037 - birthYear
}

const ag1 = calcAge1(1991);
console.log(ag1);

//  Function expressions : Annonymus function because function has no name
const calcAg2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAg2(1997);
console.log(ag1, age2);

*/

/* Arrow function

    const calcAge3 = birthYear => 2037 - birthYear;
    console.log(calcAge3(2000))

    const yearUntilretirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 60 - age;
        return ` ${firstName}  ritires in ${retirement} years`
    }

    console.log(yearUntilretirement(1991, 'roshan jha'))

*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces}  piece of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3))