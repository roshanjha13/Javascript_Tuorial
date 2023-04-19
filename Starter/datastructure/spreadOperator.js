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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your declicious pasta with ${ing1} ${ing2} ${ing3}`);
  },
};
console.log("______________________________________________");
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [10, 11, ...arr];
console.log("______________________________________________");
console.log(newArr);
console.log("______________________________________________");
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "jio"];
console.log(newMenu);
console.log("______________________________________________");
//swallow copy

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("______________________________________________");
console.log(menu);

//iterables are arrays ,string,map,set

const str = "Jonas";
const letters = [...str, "", "S."];
console.log("______________________________________________");
console.log(letters);
// spread not work on templeate litteral

const ingredients = ["a", "b", "c"];
restaurant.orderPasta(...ingredients);

//spread work on object in ES6 but object is not iiterable

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Roshan" };
console.log("______________________________________________");
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorama";
console.log("______________________________________________");
console.log(restaurantCopy.name);
console.log("______________________________________________");
console.log(restaurant.name);
