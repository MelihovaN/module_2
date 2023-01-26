const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 9433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let bestScore = [];

for (let player of players) {
    bestScore.push(player.scorePoints);
}
//console.log("Best score is " + Math.max(...bestScore));

let bestPlayer;
for (let player of players) {
  if (player.scorePoints == Math.max(...bestScore)) {
    bestPlayer = player;
  }
}
//console.log('Best player is', bestPlayer.name);

console.log("Best score is " + Math.max(...bestScore) + ' and the namw is ' + bestPlayer.name);
