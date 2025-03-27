var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x :400, y: groundY - 101, hitSize: 25, damage: 20 },
          { type: "sawblade", x: 600, y: groundY - 101, hitSize: 25, damage: 30 },
          { type: "sawblade", x: 800, y: groundY - 101, hitSize: 25, damage: 40 },
          
          { type: "enemy", x: 400, y: groundY-50, velocity: -1, damage: -1, points: 10000 },
          { type: "enemy", x: 2000, y: groundY-50, velocity: -4, damage: -25, points: 100 },
          { type: "enemy", x: 2000, y: groundY-101, velocity: -5, damage: -1000, points: 5 },

          { type: "reward", x: 800, y: groundY-100, velocity: -4, points: 500},

          { type: "level", x: 1500, y: groundY-100, velocity: -2, heals: 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
