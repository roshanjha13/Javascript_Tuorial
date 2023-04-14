const roshan = [
  "Roshan",
  "Jha",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

for (let i = roshan.length - 1; i >= 0; i--) {
  //   console.log(roshan[i]);
  console.log(i, roshan[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`Start exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}
