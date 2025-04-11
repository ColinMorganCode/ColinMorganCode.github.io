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
          { type: "FlyBotOBJ", x: 500, y: groundY - 101, hitSize: 25, damage: 20, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -25, offsetY: -25},
          { type: "FlyBotOBJ", x: 1000, y: groundY - 101, hitSize: 25, damage: 20, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -25, offsetY: -25},
          { type: "FlyBotOBJ", x: 1500, y: groundY - 101, hitSize: 25, damage: 20, image: "img/The better flyboi.webp", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -25, offsetY: -25},

          { type: "GroundOuchOBJ", x: 750, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 1250, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 2000, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 2200, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 2400, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},

          { type: "SmallGround", x: 2000, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2500, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3000, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2000, y: groundY-50, velocity: -6, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2500, y: groundY-50, velocity: -6, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3000, y: groundY-50, velocity: -6, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},

          { type: "Shooty", x: 3500, y: groundY-60, velocity: -2, damage: 0, points: 100, hitSize: 30, image: "img/Mid tier.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},

          { type: "ShootyProjectile", x: 3250, y: groundY-101, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3550, y: groundY- 5, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3850, y: groundY-101, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},

          { type: "rocks", x: 3750, y: groundY - 10, velocity: -2, points: 500, image: "img/Rock 1.png", xScale: 0.5, yScale: 0.5, offsetX: -55, offsetY: -70},

          { type: "level", x: 4000, y: groundY-100, velocity: -2, heals: 100, image: "img/images.png", xScale: 0.5, yScale: 0.5, offsetX: -50, offsetY: -12},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
         /*
          { type: "sawblade", x :400, y: groundY - 101, hitSize: 25, damage: 20, image: "img/sawblade.png"},
          { type: "sawblade", x: 600, y: groundY - 101, hitSize: 25, damage: 30, image: "img/sawblade.png" },
          { type: "sawblade", x: 800, y: groundY - 101, hitSize: 25, damage: 40, image: "img/sawblade.png" },
          */
          { type: "GroundOuchOBJ", x: 500, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 1250, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          { type: "GroundOuchOBJ", x: 2000, y: groundY, hitSize: 25, damage: 20, image: "img/Ground explody.png", rotation: 0, xScale: 0.2, yScale: 0.2, offsetX: -35, offsetY: -25},
          //Horde 1
          { type: "SmallGround", x: 1500, y: groundY-50, velocity: -3.5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 1650, y: groundY-50, velocity: -4.5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 1700, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 1850, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2000, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2150, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2300, y: groundY-50, velocity: -7, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 2450, y: groundY-50, velocity: -8, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          //Horde 2
          { type: "SmallGround", x: 2900, y: groundY-50, velocity: -3.5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3000, y: groundY-50, velocity: -4.5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3100, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3200, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3300, y: groundY-50, velocity: -5, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3400, y: groundY-50, velocity: -6, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "SmallGround", x: 3500, y: groundY-50, velocity: -8, damage: -25, points: 25, hitSize: 30, image: "img/Expendables.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
        
          { type: "Shooty", x: 3500, y: groundY-60, velocity: -2, damage: 0, points: 100, hitSize: 30, image: "img/Mid tier.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
          { type: "Shooty", x: 5000, y: groundY-60, velocity: -2, damage: 0, points: 100, hitSize: 30, image: "img/Mid tier.png", xScale: 0.7, yScale: 0.7, offsetX: -75, offsetY: -75},
        
          { type: "ShootyProjectile", x: 3250, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3500, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3750, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 4500, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 4750, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 5000, y: groundY-101, velocity: -10, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          
          { type: "ShootyProjectile", x: 2750, y: groundY-5, velocity: -2.5, damage: -100, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3050, y: groundY-101, velocity: -2.5, damage: -100, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3350, y: groundY-5, velocity: -2.5, damage: -100, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 3650, y: groundY-101, velocity: -2.5, damage: -100, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},

          { type: "ShootyProjectile", x: 4250, y: groundY-5, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 4500, y: groundY-5, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 4750, y: groundY-5, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 5000, y: groundY-101, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 5250, y: groundY-101, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
          { type: "ShootyProjectile", x: 5500, y: groundY-101, velocity: -2.5, damage: -50, points: 100, hitSize: 25, image: "img/Pew boi.png", xScale: 0.3, yScale: 0.3, offsetX: -25, offsetY: -25},
         
          { type: "rocks", x: 5300, y: groundY - 10, velocity: -2, points: 500, image: "img/rock 2.png", xScale: 0.5, yScale: 0.5, offsetX: -55, offsetY: -70},

          { type: "level", x: 5500, y: groundY-100, velocity: -2, heals: 100, image: "img/images.png", xScale: 0.5, yScale: 0.5, offsetX: -55, offsetY: -70},
        ],
      },
      {
        name: "Robot Finale",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "Final", x: 1000, y: groundY-50, velocity: -2, damage: -100, points: 25, hitSize: 50, image: "img/Final Boi.png", xScale: 2.5, yScale: 2, offsetX: -300, offsetY: -270, health: 100},
          { type: "rocks", x: 4250, y: groundY - 10, velocity: -4, points: 500, image: "img/Rock 3.png", xScale: 0.5, yScale: 0.5, offsetX: -55, offsetY: -70},
        ]
      }

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
