const calcTips = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 448, 37, 105, 10, 1100, 86];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log("bills =", bills);
console.log("tips =", tips);
console.log("totals =", totals);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAvg([2, 3, 5]));
