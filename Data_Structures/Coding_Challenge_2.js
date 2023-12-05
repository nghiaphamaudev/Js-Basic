/*1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1 : entries để lấy vị trí và value

for (const [goals, namePlayer] of Object.values(game.scored).entries()) {
  console.log(`Goal ${goals + 1} : ${namePlayer}`);
}

//Task 2:
const value = Object.values(game.odds);
let totalOdd = 0;
for (const values of value) {
  totalOdd += values;
}
console.log(`average odd : ${totalOdd / value.length}`);

// Task 3:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
//Task 4:

const scorers = {};

for (const player of game.scored) {
  /*Lần lặp đầu tiên (với player là 'Lewandowski'):
console.log(scorers['Lewandowski']);: 
Nếu 'Lewandowski' đã là một thuộc tính của scorers, giá trị của nó sẽ được in ra (ví dụ, undefined nếu chưa có).
Nếu đã tồn tại, giá trị này sẽ không thay đổi.
scorers['Lewandowski'] = (scorers['Lewandowski'] || 0) + 1;:
Giá trị của 'Lewandowski' trong scorers sẽ được cập nhật. 
Nếu thuộc tính này chưa tồn tại, nó sẽ được tạo mới với giá trị là 1; 
nếu đã tồn tại, giá trị sẽ được tăng lên 1.
console.log(scorers['Lewandowski']);: Giá trị mới của 'Lewandowski' sau khi đã cập nhật. */
  scorers[player] = (scorers[player] || 0) + 1;
  console.log(Object.keys(scorers));
}
console.log(scorers);

// console.log(scorers);
