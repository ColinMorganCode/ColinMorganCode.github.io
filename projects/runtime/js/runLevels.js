var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x , y, hitSize, damage){
      var hitZoneSize = hitSize; // define hitzone size, assigns to variable
      var damageFromObstacle = damage; // clarifys amount of damage
      var ObstaclesHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates obstcle hit zone using the size and damage parameters
      ObstaclesHitZone.x = x; // sets x cord of saw blade
      ObstaclesHitZone.y = y; // sets y cord of saw blade 
      game.addGameItem(ObstaclesHitZone); // adds the hitzone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draw the image bitmap and stores it
      ObstaclesHitZone.addChild(obstacleImage); // adds the image to the hit zone
      obstacleImage.x = -25 // changes the x pos of the Obstacles image
      obstacleImage.y = -25 // changes the y pos of the Obstacles image
    }
    
    createObstacles(400, groundY - 101, 25, 20)
    createObstacles(600, groundY - 101, 25, 30)
    createObstacles(800, groundY - 101, 25, 40)
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
