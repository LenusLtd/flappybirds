//Create our 'Main' state that will contain the game
var mainStage = {
    preload: function() {
        //This function will be executed at the beginning 
        //Thats where we load the images and sound
    },
    create: function() {
        // THis Function is called after the preload function
        //Here we setup the game, display spirites, etc. 
    },
    update: function () {
        // This function s called 60 times per second
        // it contains the games logic
    },
};

//initialise phaser, and create a 400px x 490px game 
var game = new Phaser.Game(400,490);

//add the 'MainState' and call it 'Main'
game.state.add("main", mainStage);

//Start the state to acctually start the game
game.state.start("main");