'use strict';
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
  scored: ['Lewandowski', 'Gnarby', 'Kimich', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1: Create 2 variables  to contain players of each team
const [players1, players2] = game.players;

//Task 2: Create one variable('gk') and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
//Task 3: create an array ('allPlayer') contaning all players
const [allPlayers] = [...players1, ...players2];
console.log(allPlayers);
// Task 4; create playersFinal
const playersFinal = [...players1, 'Thiago', 'Kiminch', 'TonyKross'];
console.log(playersFinal);

// Task 5:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// Task 6: Write a function ('printGoals') that receivea an arbitnary number of player names
// (not an array) and prints each of them to the console, along with the number of goals
// that were scored in toal (number of player names passed in);
//Viết hàm ('printGoals') nhận số lượng tên người chơi tùy ý
//(không phải mảng) và in từng mục ra bảng điều khiển, cùng với số bàn thắng
//được ghi tổng cộng (số tên cầu thủ được ghi bàn);
//tức là có bao nhiê tên đc truyền vào thì cso bấy nhiêu bàn thắng dcd ghi

const printGoals = (...players) => {
  console.log(`${players.length} were scored`);
};
printGoals(...game.scored);
//Task 7:

team1 < team2 && console.log('Team 1 is likey win!!');
