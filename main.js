//Create our 'Main' state that will contain the game
var mainState = {
    preload: function() {
        //This function will be executed at the beginning 
        //Thats where we load the images and sound
      
        //Load the bird Sprite
        game.load.image('Bird','assets/bird.png');
        game.load.image('pipe', 'assets/pipe.png');
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
        
        //Create an empty group
        this.pipes = game.add.group();
        
        //Timer for pipes
        this.timer =game.time.events.loop(1500, this.addRowOfPipes, this);
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
        
        //Add a pipe
        addOnePipe: function(x, y){
            //Create a pipe at the position x and y
            var pipe = game.add.sprite(x, y, 'pipe');
            
            //Add pipe to group 
            this.pipes.add.(pipe);
            
            //Enable the pysics on the pipe
            game.physics.arcade.enable(pipe);
            
            //add Velocity to pipe to make it move left
            pipe.body.velocity.x = -200;
            
            //Automatically kill pipe when it is no longer visable 
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        },
},
    //many pipes
    addRowOfPipes: function(){
        // randomly pick a numver between 1 and 5 
        //This will be the hole position in the pipe
        var hole = Math.floor(Math.random() *5) + 1;
        
        //add 6 pipes
        for (var i =0; i <8; i++)
            if (i !=hole && i!= hole +1)
                this.addOnePipe(400, I *60 + 10);
    };
};

//initialise phaser, and create a 400px x 490px game 
var game = new Phaser.Game(400,490);

//add the 'MainState' and call it 'Main'
game.state.add("main", mainStage);

//Start the state to acctually start the game
game.state.start("main");