'use strict';
//Lấy 1 object bên ngoài làm thuộc tính của object bên dưới
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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
};
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
  openingHours,

  order(starterIndex, mainIndex, endIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[endIndex],
    ];
  },

  orderDelivery({ starterIndex = 0, endIndex = 0, time = '22:10', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[endIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: (Ing1, ...otherIng) => {
    console.log(Ing1);
    console.log(otherIng);
  },
};

/// With optional - chaining

console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//restaurant.openingHours[day] = thu {....};

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// kiểm tra 1 hàm có tồn tại hay không

console.log(restaurant.order?.(0, 1) ?? "Method doesn'n exist");

//kiểm tra arrays có tồn tại hay không

const users = [
  {
    name: 'Nghia',
    email: 'phamnghia@gmail.com',
  },
];

console.log(users[0]?.name ?? 'User was empty');
