//Create our 'Main' state that will contain the game
var mainStage = {
    preload: function() {
        //This function will be executed at the beginning 
        //Thats where we load the images and sound
      
        //Load the bird Sprite
        game.load.image('Bird','assets/bird.png');
    },
    create: function() {
        // THis Function is called after the preload function
        //Here we setup the game, display spirites, etc. 
        
        // Change the bckground colour to blue- For now!
        game.stage.backgroundColor ='#71c5cf';
        
        //set the physics for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Display the bird at positions of x=100 and y=245
        this.bird =game.add.spirte (100,245, 'bird');
        
        //add the physics to the bird
        //Needed for: movement, Gravity, collisions, Etc. 
        game.physics.arcade.enable(this.bird);
    
    //Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;
        
        //Call 'jump' function when the spacebar is pressed 
        var spaceBar = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
        spaceBar.onDown.add(this.jump,this);
    },
    update: function () {
        // This function s called 60 times per second
        // it contains the games logic
        
        //Call the 'Restartgame; function
        if (this.bird.y <0|| this.bird.y> 490) 
                this.restartGame();
            },
    jump: function(){
        //Add a vertical velocity to the bird
        this.bird.body.velocity.y =-350;
    },
    
    //RESTART THE GAME
    restartGame: function(){
    //Start the 'Main' State, which restarts the game
    game.state.start('main');
},
};

//initialise phaser, and create a 400px x 490px game 
var game = new Phaser.Game(400,490);

//add the 'MainState' and call it 'Main'
game.state.add("main", mainStage);

//Start the state to acctually start the game
game.state.start("main");