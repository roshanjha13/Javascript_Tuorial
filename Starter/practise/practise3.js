const mark = {
  fullName: "Mark Miller",
  mass: 78.5,
  height: 1.69,
  calcMarkBmi: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcJohnBmi: function () {
    this.Bmi = this.mass / this.height ** 2;
    return this.Bmi;
  },
};
john.calcJohnBmi();
mark.calcMarkBmi();
// console.log(john.calcJohnBmi());
// console.log(mark.calcMarkBmi());

// console.log(
//   `${john.fullName}'s ${john.calcJohnBmi()} is higher than ${
//     mark.fullName
//   }'s ${mark.calcMarkBmi()}`
// );

// console.log(
//   `${mark.fullName}'s ${mark.calcMarkBmi()} is higher than ${
//     john.fullName
//   }'s ${john.calcJohnBmi()}`
// );

if (john.Bmi > mark.Bmi) {
  console.log(
    `${john.fullName}'s ${john.Bmi} is higher than ${mark.fullName}'s ${mark.Bmi}`
  );
} else {
  console.log(
    `${mark.fullName}'s ${mark.Bmi} is higher than ${john.fullName}'s ${john.Bmi}`
  );
}
