//initialization
// let rep = 1;
// //condition
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   // repetation
//   rep++;
// }

// dice role example
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}
