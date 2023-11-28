'use strict';

const res1 = {
  name: 'Capri',
  numGuest: 0,
};
const res2 = {
  name: 'La Pizza',
  owner: 'Pham Van Nghia',
};

// res1.numGuests = res1.numGuest || 10;
// res2.numGuests = res2.numGuest || 10;

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;

res1.numGuest ??= 10;
res2.numGuest ??= 10;

console.log(res1);
console.log(res2);
