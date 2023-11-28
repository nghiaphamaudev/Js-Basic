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
//Rest
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Truyền vô hạn tham số vào 1 hàm
// const add = (...numbers) => console.log(numbers);
// add(2, 3, 4, 54, 4);
// add(2, 2, 'as', 3);

// spred operator
//Tạo một object mới trên 1 object cũ

// const newRestaurant = {
//   foundedIn: 1992,
//   ...restaurant,
//   founder: 'Gullit',
// };

// console.log(newRestaurant);
// //Thay đổi giá trị của 1 object trong object

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // const arr = [7, 8, 9, 10];
// // const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // Tạo ra một menu mới từ object nhà hàng
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

const str = 'Jonas';
const letters = [...str, ' ', 'Schetmant'];
console.log(letters);
console.log(...str);

// const {
//   fri: { open: o, close: c },
//   sat: { open: op = 0, close: cl = 2 },
// } = restaurant.openingHours;

// console.log(o, c, op, cl);
// restaurant.orderDelivery({
//   time: '10:16',
//   starterIndex: 2,
//   endIndex: 2,
//   address: 'Via del Sole, 21',
// });

// // trong trường hợp khoogn dủ dữ liệu
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);
// //Giá trị mặc định
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// let a = 11;
// let b = 99;

// const obj = { a: 24, b: 45, c: 67 };

// ({ a, b } = obj);
// console.log(a, b);

// //Lấy ra giờ mở cửa của thứ sáu

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// // Bình thường khi tái cấu trúc
// const a = arr[0];
// const B = arr[1];
// const C = arr[2];
// // sỬ DỤNG TÁI CẤU TRÚC
// const [x, y, z] = arr;
// console.log(x, y, z);
// // ex: lấy phần tử bên trong mảng của đối tượng restuarant

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // đổi giá trị hai biên cho nhau

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // [secondary, , main] = restaurant.categories;
// // [secondary, main] = [main, secondary];
// // console.log(main, secondary);

// //nhận 3 giá trị trong 1 function từ 1 object

// const [starterIndex, mainIndex, endIndex] = restaurant.order(2, 0, 2);
// console.log(starterIndex, mainIndex, endIndex);

// //tái cấu trúc dữ liệu mảng lồng nhau

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //đặt giá trị mặc định

// const [p = 1, q = 2, r = 2] = [7, 9];
// console.log(p, q, r);
console.log('-----OR--------');
const guest1 = restaurant.numberGuest ? restaurant.numberGuest : 10;
console.log(guest1);

const guests2 = restaurant.numberGuest || 10;
console.log(guests2);

console.log('----------AND---------');
//kiểm tra xem obejct order pizaa có toofnt ại trong restaurant ko nếu có thì thực hiện gọi
if (restaurant.orderPizza) {
  restaurant.orderPizza('chiecken', 'fried chicken');
}
//  sử dụng short circuliting
restaurant.orderPizza && restaurant.orderPizza('chiecken', 'fried chicken');
//nếu hàm order pizza tồn tại thì nó trả về true và tiêp tụp kiếm tra số hạng tiếp theo
// nesu ko toofnt ại thì lập tức trả về false
