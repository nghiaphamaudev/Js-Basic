const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//Task 1:
const events = [...new Set(gameEvents.values())];
console.log(events);

//Task 2:
gameEvents.delete(64);
console.log(gameEvents);

//Task 3:

//Lấy giá trị cuối cùng trong mảng

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on 
average, every ${time / gameEvents.size} minutes`);

//Task 4:

for (const [min, events] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${events} `);
}
