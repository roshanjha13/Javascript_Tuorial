/* basics of loop  

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

*/

/* for loop examples

//ex1 :
    const roshan = [
        'roshan',
        'jha',
        2023 - 2000,
        'developer',
        ['ankit', 'ankush', 'aniket']
    ]

    const types = [];

    for (let i = 0; i < roshan.length; i++) {
        //reading from roshan's array;
        console.log(roshan[i], typeof roshan[i]);
        types[i] = typeof roshan[i]
    }

    //filling types array
    console.log(types);

//ex2 :

    const years = [1991, 2007, 1969, 2002];
    const ages = [];

    for (let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }

    console.log(ages);

//ex3 : continue and break

    for (let i = 0; i < roshan.length; i++) {
        if (typeof roshan[i] !== 'string') break;
        console.log(roshan[i], typeof roshan[i]);
    }

    for (let i = 0; i < roshan.length; i++) {
        if (typeof roshan[i] !== 'string') continue;
        console.log(roshan[i], typeof roshan[i]);
    }

//ex4: Backward Looping & nested Loop

    for (let i = roshan.length - 1; i >= 0; i--) {
        console.log(roshan[i]);
    }

    for (let exercise = 1; exercise < 4; exercise++) {
        console.log(`----------starting exercise ${exercise}---------`);
        for (let rep = 1; rep < 6; rep++) {
            console.log(`Lifting weight repitition ${rep}`);
        }
    }

*/

/* while loop 



*/

// let rep = 1;
// while (rep <= 10) {
//     console.log(`starting repitation ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1; // give diff value in every time


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop about to end');
}

