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
console.log('----------OR---------');
// Toán tử OR sẽ trả về giá trị true đầu tiên mà không quan tâm đén toán tử #, hoặc sẽ trả
// về giá trị cuối cùng nếu tất cả là giá trị false
console.log(3 || 'Jonas'); // 3 vì 3 là giá trị true
console.log('' || 'JOnas'); // Jonas hai giá trị false trả về giá trị cuối cùng
console.log(true || 3); // trả về true vì trả về giá trị true đầu tiên
console.log(undefined || null); // null vì cùng false lấy giá trịc uối cùng
//Ex
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

//toán tử or kiểm tra thuộc tính addressGuest có toofnt ại trong restaurant ko nếu ko thì là 20;
const guest2 = restaurant.addressGuest || 20;
console.log(guest2);
console.log('----------AND---------');
//Sẽ trả về giá trị false đầgu tiên, nếu true hết sẽ trả về giá trị true cuối cùng
console.log(0 && 'Jonas');
console.log(4 && 'Nghia');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//kiểm tra xem orderPizza có phải là thuộc tính của restaurant không
// Cả hai đều là true nên sẽ lấy  giá trị cuối cùng

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
