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
          /*
          { type: "sawblade", x :400, y: groundY - 101, hitSize: 25, damage: 20, image: "img/sawblade.png", rotation: 10},
          { type: "sawblade", x: 600, y: groundY - 101, hitSize: 25, damage: 30, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 800, y: groundY - 101, hitSize: 25, damage: 40, image: "img/sawblade.png", rotation: 10 },
          */
          { type: "FlyBot", x: 500, y: groundY - 101, hitSize: 25, damage: 40, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2},
          { type: "FlyBot", x: 750, y: groundY - 101, hitSize: 25, damage: 40, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2},
          { type: "FlyBot", x: 1000, y: groundY - 101, hitSize: 25, damage: 40, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2},

          { type: "SmallGround", x: 2000, y: groundY-50, velocity: -3, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -25, offsetY: -25},
          { type: "SmallGround", x: 3000, y: groundY-50, velocity: -3, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 1, yScale: 1 },
          { type: "SmallGround", x: 2500, y: groundY-50, velocity: -3, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 1, yScale: 1 },

          { type: "reward", x: 800, y: groundY-100, velocity: -4, points: 500},

          { type: "level", x: 5000, y: groundY-100, velocity: -2, heals: 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x :400, y: groundY - 101, hitSize: 25, damage: 20, image: "img/sawblade.png"},
          { type: "sawblade", x: 600, y: groundY - 101, hitSize: 25, damage: 30, image: "img/sawblade.png" },
          { type: "sawblade", x: 800, y: groundY - 101, hitSize: 25, damage: 40, image: "img/sawblade.png" },
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
