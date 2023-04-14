const roshan = {
  firstName: "Roshan",
  lastName: "Jha",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Kaushik", "Soumi"],
  hasDriverLicence: true,
  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  calcAge: function () {
    // console.log(thi);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${roshan.firstName} is a 
        ${roshan.calcAge()} old ${roshan.job}
    and he has ${this.hasDriverLicence ? "a" : "no"} driver licesnse`;
  },
};
// in object we need expression

console.log(roshan.calcAge());
console.log(roshan.getSummary());
