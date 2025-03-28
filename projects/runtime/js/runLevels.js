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
      ObstaclesHitZone.rotationalVelocity = 10
    }
    
    

    
    
    function createEnemy (x, y, velocity, d, points){
        var enemy = game.createGameItem("enemy", 25); // creates enemy came item and adds it to the game
      var redSquare = draw.rect(50, 50, "red"); // creates a red square and store it in the variable red square
      redSquare.x = -25; // offsets image from the hit zone
      redSquare.y = -25; // offsets image from the hit zone
      enemy.addChild(redSquare); // adds square to the variable
      enemy.x = x; // x pos of enemy
      enemy.y = y; // y pos of enemy
      game.addGameItem(enemy); // adds enemy to game
      enemy.velocityX = velocity // controls the enemy velocity
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(d) // sets the amount of damage the enemy does
        };
      enemy.onProjectileCollision = function () {
        game.increaseScore(points);
        enemy.fadeOut(); // can also use shrink() and flyTo(x,y)
      }
    }

    


    function createReward (x, y, velocity, points){
      var reward = game.createGameItem("reward", 25); // creates reward came item and adds it to the game
    var blueSquare = draw.rect(50, 50, "blue"); // creates a blue square and store it in the variable blue square
    blueSquare.x = -25; // offsets image from the hit zone
    blueSquare.y = -25; // offsets image from the hit zone
    reward.addChild(blueSquare); // adds square to the variable
    reward.x = x; // x pos of reward
    reward.y = y; // y pos of reward
    game.addGameItem(reward); // adds reward to game
    reward.velocityX = velocity // controls the reward velocity
    reward.onPlayerCollision = function () {
      game.increaseScore(points) // sets the amount of damage the reward does
      reward.shrink()
      };
    
    }
    

    function createLevel (x, y, velocity, heals){
      var reward = game.createGameItem("reward", 25); // creates reward came item and adds it to the game
    var yellowSquare = draw.rect(50, 50, "yellow"); // creates a yellow square and store it in the variable yellow square
    yellowSquare.x = -25; // offsets image from the hit zone
    yellowSquare.y = -25; // offsets image from the hit zone
    reward.addChild(yellowSquare); // adds square to the variable
    reward.x = x; // x pos of reward
    reward.y = y; // y pos of reward
    game.addGameItem(reward); // adds reward to game
    reward.velocityX = velocity // controls the reward velocity
    reward.onPlayerCollision = function () {
      game.changeIntegrity(heals) // sets the amount of damage the reward does
      reward.shrink()
      startLevel();
      };
    
    }

    
    function startLevel() {
      // TODO 13 goes below here
      
      var level = levelData[currentLevel] // fetches the current level from the level data array and stores it in var level
      var levelObjects = level.gameItems // retrive the array of gameItems and stores it in levelObjects

      for (var i = 0; i < levelObjects. length; i++){
        var element = levelObjects[i]

        if (element.type === "sawblade") { // checks the type key value of the gameItems to determine which object to place
          createObstacles(element.x, element.y, element.hitSize, element.damage); // if true, teh relavent function will be calleed
        }
        if (element.type === "enemy") { // checks the type key value of the gameItems to determine which object to place
          createEnemy(element.x, element.y, element.velocity, element.damage, element.points); // if true, teh relavent function will be calleed
        }
        if (element.type === "reward") { // checks the type key value of the gameItems to determine which object to place
          createReward(element.x, element.y, element.velocity, element.points); // if true, teh relavent function will be calleed
        }
        if (element.type === "level") { // checks the type key value of the gameItems to determine which object to place
          createLevel(element.x, element.y, element.velocity, element.heals); // if true, teh relavent function will be calleed
        }





      }

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
