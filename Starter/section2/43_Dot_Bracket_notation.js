const roshan = {
  firstName: "Roshan",
  lastName: "Jha",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Kaushik", "Soumi"],
};
// console.log(roshan);

// console.log(roshan.age);
console.log(roshan["lastName"]);

const nameKey = "Name";
console.log(roshan["first" + nameKey]);

// how to add new property of an object

roshan.location = "India";
roshan["instagram"] = "@roshanjha";
console.log(roshan);

console.log(
  `${roshan.firstName} has ${roshan.friends.length} friends best friends is ${roshan.friends[0]}`
);
