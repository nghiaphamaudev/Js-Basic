'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex, endIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[endIndex],
    ];
  },

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

  orderDelivery: function ({
    starterIndex = 0,
    endIndex = 0,
    time = '22:10',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[endIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: (Ing1, ...otherIng) => {
    console.log(Ing1);
    console.log(otherIng);
  },
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const items of menu) {
  console.log(items);
}

// Lấy vị trí của nó

for (const items of menu.entries()) {
  console.log(items);
}

//Cách viết menu  #

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

//Cah viest #
////Boqri vì mỗi items là 1 mảng riêng mà 1 menu ko thể bắt đầu bằng 0 đc nên +1
// chỉ số 1 là vị trí index của mảng items có giá trị là món ăn
for (const items of menu.entries()) {
  console.log(`${items[0] + 1} : ${items[1]}`);
  // console.log(`${items[0]}`);
}
