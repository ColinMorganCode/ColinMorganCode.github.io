var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
      var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,"red"); // draws a rectangle and stores it in variable fill
            background.addChild(backgroundFill); // adds the fill variable to the background
            
            // TODO 2: - Add a moon and starfield
            for (var i = 0; i < 100; i++){
                var circle = draw.circle(10, "white", "LightGray", 2); // create circle with specified radius and color
                circle.x = canvasWidth * Math.random(); // space for stars to be in
                circle.y = groundY * Math.random(); // calculates where the ground is
                background.addChild(circle); // summons the circles
            }
            
            
            var moon = draw.bitmap("img/moon.png"); // creates an object using a bit map
                    moon.x = canvas.width - 900; // set moon x
                    moon.y = groundY - 500; // set moon y
                    moon.scaleX = .5; //scale moon width
                    moon.scaleY = .5; //scale moon height
                    background.addChild(moon); //add the moon to background

                    
                    
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                var buildingColors = ["red", "blue", "white", "grey", "purple"]
                var buildingHeight = 300 * Math.random(); // assign 300 to the building height
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); // specifics and details
                building.x = 200 * i; //multi 200 by current i, stores as x pos
                building.y = groundY - buildingHeight;// subtracts build height from ground to get y pos
                background.addChild(building); //adds to background container
                buildings.push(building); // adds to buildings array for further manipulation
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // creates a bitmap for var tree
            tree.x = canvasWidth; // place tree offscreen to the right
            tree.y = groundY - 230; // place tree at ground level
            background.addChild(tree); //add tree to background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 4; // moves tree to the left by subtracting its currect x pos
            if (tree.x < -200) {
            tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i]; // the individual index of thhe building array
                building.x -=0.5 // subtracts from the buildings xpos
                if (building.x < -200){ // checks if the building is off of the canvas
                    building.x = canvas.width + 100 // rest x value to the other side of the canvas
                }
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
