const roshan = ["roshan", "jha", "teacher", ["Micheal", "Peter", "Steven"]];

const types = [];

for (let i = 0; i < roshan.length; i++) {
  // console.log(roshan[i], typeof roshan[i]);

  types[i] = typeof roshan[i];
}

// console.log(types);

const years = [1991, 2007, 2009, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

// console.log(ages);
// Strings

for (let i = 0; i < roshan.length; i++) {
  if (typeof roshan[i] !== "string") continue;

  console.log(roshan[i], typeof roshan[i]);
}

// Break

for (let i = 0; i < roshan.length; i++) {
  if (typeof roshan[i] !== "number") break;

  console.log(roshan[i], typeof roshan[i]);
}
