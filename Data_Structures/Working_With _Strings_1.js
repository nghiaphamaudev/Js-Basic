'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);
//vị trí  của kí tự r
console.log(airline.indexOf('r'));
// vị trí cuối cùng của kí tự r
console.log(airline.lastIndexOf('r'));

//Lấy các kí tự ở vị trí ?
console.log(airline.slice(4));

//Lấy các kí tự từ ? đến ?
console.log(airline.slice(4, 7));

//Lấy kí tự đến space

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') console.log('You have a middle 😬');
  else console.log('You have a lucky 🤪');
};
checkMiddleSeat('23B');
checkMiddleSeat('2F');
checkMiddleSeat('34C');

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Thay thế kí tự trong 1 chuỗi

const announce = ' All passengers come to boarding door 23. Boarding door 23!';
console.log(announce.replace('door', 'gate'));
//Thay thế toàn bộ 'door' thành 'gate'
console.log(announce.replace(/door/g, 'gate'));

///Booleans
const namePlane = 'A320neo';
console.log(namePlane.includes('A320'));

const checkBagge = items => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed');
  } else {
    console.log('Welcome board');
  }
};
checkBagge('I have a laptop, some Food and a pocked Knife');
checkBagge('Socks and Camera');
checkBagge('Got some snacks and a gun for protection');
