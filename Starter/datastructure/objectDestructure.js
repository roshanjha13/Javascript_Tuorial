const restaurant = {
  name: "Classico Italiano",
  location: "109/7 Bankim sarani road,New Alipur,Kolkata",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = 20,
  }) {
    console.log(
      `Ordered received: ${this.starterMenu[starterIndex]}
       and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22.30",
  address: "liluah",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "liluah",
  mainIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log("----------------------------------------");
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log("----------------------------------------");
console.log(menu, starters);

//Mutated data or variables

let a = 111;
let b = 999;
const obj = { a: 3, b: 7, c: 14 };

({ a, b } = obj);
console.log("----------------------------------------");
console.log(a, b);

//nested object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log("----------------------------------------");
console.log(o, c);
