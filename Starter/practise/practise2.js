/* bill calculators : 

    const bill = 275;
    const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
    console.log(`The bill was ${bill} and tip amount is ${tip} the total amount is ${bill + tip} thankyou ..`);

*/

/* bill calculator using function and array

    const calTip = function (bill) {
        return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
    }

    const bills = [125, 555, 44]
    const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]

    const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
    console.log(bills, tips, totals);


*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
}

const bills = [22, 295, 176, 448, 37, 105, 10, 110, 86, 52]
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// summation a single array value:

const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    console.log(sum);
    return sum / arr.length;
}

console.log(calcAvg([2, 3, 7]));
console.log(calcAvg(totals))

